import Head from 'next/head';
import { SyntheticEvent, useEffect, useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';

interface Champion {
    id: string,
    name: string
}

interface Skin {
    id: number,
    name: string
}

interface List extends Array<{
    id: string,
    label: string
}> { }

export default function Home() {
    const [champion, setChampion] = useState<Champion | undefined>(undefined);
    const [skin, setSkin] = useState<Skin | undefined>();
    const [tries, setTries] = useState<number>(0);
    const [image, setImage] = useState<string>();
    const [championList, setChampionList] = useState<List>([]);
    const [skinList, setSkinList] = useState<List>([]);
    const [correctAnswer, setCorrectAnswer] = useState<boolean>(false);

    async function getChampions() {
        const championsRequest = await fetch('https://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_GB/champion.json');
        const champions = await championsRequest.json();
        const championArray: List = [];
        for (const key in champions.data) {
            championArray.push({
                id: champions.data[key].id,
                label: champions.data[key].name
            });
        }
        setChampionList(championArray);
    }

    async function getRandomChampion() {
        const rand = Math.floor(Math.random() * championList.length);
        setChampion({
            id: championList[rand]?.id,
            name: championList[rand]?.label
        });
    }

    async function getRandomSkin() {
        const championRequest = await fetch(`https://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_GB/champion/${champion?.id}.json`);
        const skins = (await championRequest.json()).data[champion?.id!].skins;

        const s: List = [];
        for (const skin of skins) {
            s.push({
                id: skin?.num,
                label: skin?.name
            })
        }

        setSkinList(s);

        const rand = Math.floor(Math.random() * skins.length);
        setSkin({
            id: skins[rand].num,
            name: skins[rand].name
        })
    }

    useEffect(() => {
        getChampions();
    }, []);

    useEffect(() => {
        if (championList.length > 0 && !champion) {
            getRandomChampion();
        }
    }, [championList]);

    useEffect(() => {
        if (champion !== undefined) {
            getRandomSkin();
        }
    }, [champion]);

    function checkAnswer(e: SyntheticEvent<Element, Event>, value: {
        id: string,
        label: string
    } | null) {
        if (!value || value?.id === undefined) return;
        if (value?.id === champion?.id) {
            setCorrectAnswer(true);
        } else {
            const t = tries;
            setTries(t + 1);
        }
    }

    return (
        <>
            <Head>
                <title>League Splash Quiz</title>
            </Head>

            {
                champion !== undefined && skin !== undefined && (
                    <div style={
                        {
                            background: `url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_${skin.id}.jpg) center center`,
                            width: `${150 + (tries * 25)}px`,
                            height: `${150 + (tries * 25)}px`
                        }
                    } />
                )
            }


            <br />

            <Autocomplete
                disablePortal
                id={'combobox-id'}
                options={championList}
                renderInput={(params) => <TextField {...params} label="Champion" />}
                onChange={(e, value) => checkAnswer(e, value)}
            />
            {
                correctAnswer && (<h1>Rätt svar</h1>)
            }

            {/* <p>Skin</p>
            <select>
                <option value={''}>Ingen gissning</option>
                {
                    skinList.map((row, idx) => (
                        <option key={`skin${idx}`} value={row.id}>{row.label}</option>
                    ))
                }
            </select>
            <br />
            <br />
            <button>Gissa</button> */}
        </>
    )
}

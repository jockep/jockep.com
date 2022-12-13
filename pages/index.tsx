import Head from 'next/head';
import { FaSpinner } from 'react-icons/fa';
import { ReactNode, SyntheticEvent, useEffect, useRef, useState } from 'react';
import { Autocomplete, TextField, Select, MenuItem, SelectChangeEvent, Button } from '@mui/material';
import { Box } from '@mui/system';

interface Champion {
    id: string,
    name: string
}

interface Skin {
    id: number,
    name: string
}

interface ListItem {
    id: string,
    label: string,
    correct?: boolean
}
interface List extends Array<ListItem> { }

export default function Home() {
    const [champion, setChampion] = useState<Champion | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(true);
    const [skin, setSkin] = useState<Skin | undefined>();
    const [tries, setTries] = useState<number>(0);
    const [championList, setChampionList] = useState<List>([]);
    const [guessList, setGuessList] = useState<List>([]);
    const [guess, setGuess] = useState<ListItem | null>(null);
    const [skinList, setSkinList] = useState<List>([]);
    const [correctAnswerChampion, setCorrectAnswerChampion] = useState<boolean>(false);
    const [correctAnswerSkin, setCorrectAnswerSkin] = useState<boolean>(false);
    const ref = useRef();

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
        });

        setLoading(false);
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

    function checkAnswer(e: SyntheticEvent<Element, Event>, value: ListItem | null) {
        if (!value || value?.id === undefined) return;
        setGuess(value);
        if (value?.id === champion?.id) {
            const guesses = guessList;
            guesses.unshift({
                ...value,
                correct: true
            });

            setGuessList(guesses);
            setCorrectAnswerChampion(true);
        } else {
            const t = tries;
            setTries(t + 1);
            const champs = championList.filter(c => c.id !== value.id);

            const guesses = guessList;
            guesses.unshift({
                ...value,
                correct: false
            });

            setGuessList(guesses);
            setChampionList(champs);
            setGuess(null);
        }
    }

    function checkSkinAnswer(event: SelectChangeEvent<number>, child: ReactNode) {
        if (event.target.value === skin?.id) {
            setCorrectAnswerSkin(true);
        } else {
            const skins = skinList.filter(c => c.id !== event.target.value);
            setSkinList(skins);
        }
    }

    if (loading) {
        return (
            <section className='container'>
                <Head>
                    <title>League Splash Quiz</title>
                </Head>
                <FaSpinner className='spinner' />
            </section>
        );
    }

    return (
        <section className='container'>
            <Head>
                <title>League Splash Quiz</title>
            </Head>

            <h1>League Splash Quiz</h1>

            <section className='splash'>
                {
                    champion !== undefined && skin !== undefined && (
                        <div style={
                            {
                                background: `url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_${skin.id}.jpg) center center`,
                                width: `${correctAnswerChampion ? 1215 : 150 + (tries * 25)}px`,
                                height: `${correctAnswerChampion ? 717 : 150 + (tries * 25)}px`,
                                maxWidth: '1215px',
                                maxHeight: '717px',
                                border: correctAnswerChampion ? '3px solid green' : '0px solid green'
                            }
                        } />
                    )
                }
            </section>


            <br />

            <Autocomplete
                disablePortal
                id={'combobox-id'}
                multiple={false}
                groupBy={option => option.label.charAt(0).toUpperCase()}
                options={championList.sort((a, b) => -b.label.charAt(0).toUpperCase().localeCompare(a.label.charAt(0).toUpperCase()))}
                value={guess}
                blurOnSelect
                disabled={correctAnswerChampion}
                ref={ref}
                renderInput={(params) => <TextField {...params} label="Champion" />}
                onChange={(e, value) => checkAnswer(e, value)}
                style={{ 'width': '25vw' }}
                renderOption={(props, option) => (
                    <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                        <img width="50" src={`https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/${option.id}.png`} />
                        {option.label}
                    </Box>
                )}
            />


            {
                correctAnswerChampion && (
                    <Select
                        style={{ 'width': '25vw', 'color': '#333333 !important' }}
                        onChange={(e, child) => checkSkinAnswer(e as SelectChangeEvent<number>, child)}
                        id='select-skin-id'
                        label="Skin"
                        disabled={correctAnswerSkin}
                    >
                        <MenuItem key='skindef' value="">None</MenuItem>
                        {
                            skinList.map((row, idx) => (
                                <MenuItem key={`skin${idx}`} value={row.id}>{row.label}</MenuItem>
                            ))
                        }
                    </Select>
                )
            }

            {
                correctAnswerSkin && (
                    <>
                        <h1>Correct Answer!</h1>
                        <Button onClick={() => window.location.reload()}>New game</Button>
                    </>
                )
            }

            {
                guessList.length > 0 && (<h1>History</h1>)
            }
            <div>
                {
                    guessList.map((g, idx) => (
                        <Box key={`guess${idx}`} component="figure" sx={{ '& > img': { mr: 2, flexShrink: 0, 'border': g.correct ? '3px solid green' : '3px solid red' } }}>
                            <img width="50" src={`https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/${g.id}.png`} />
                            {g.label}
                        </Box>
                    ))
                }
            </div>


        </section >
    )
}

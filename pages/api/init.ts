import type { NextApiRequest, NextApiResponse } from 'next';
import { read } from 'jimp';
import { readFile, readdir } from 'fs/promises';
import { randomInt } from 'crypto';

type Data = {
    name: string
    image: string,
}

//1215x717
//http://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_US/champion.json
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const path = './public/splash/';
    const images = await readdir(path);
    const image = images[randomInt(images.length)];
    const imageData = await readFile(`${path}${image}`);

    res.status(200).json({
        name: image.split('_')[0],
        image: Buffer.from(imageData).toString('base64'),
    })
}

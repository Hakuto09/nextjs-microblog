import path from "path";
import fs from "fs";
import matter from "gray-matter";


const postsDirectory = path.join(process.cwd(), "posts")

// mdファイルデータを取り出す。
export function getPostsData() {
    const func = 'getPostsData';

    const fileNames = fs.readdirSync(postsDirectory);
    console.log(func, ' fileNames ', fileNames);

    const allPostsData = fileNames.map((fileName) => {
        const func = 'fileNames.map';
        console.log(func, ' fileName ', fileName);

        // ファイル名から拡張子を外して、idとする
        const id = fileName.replace(/\.md$/, "");
        console.log(func, ' id ', id);

        // マークダウンファイルを文字列として読み取る
        const fullPath = path.join(postsDirectory, fileName);
        console.log(func, ' fullPath ', fullPath);

         // パスがファイルかどうか (or フォルダ) を確認
         const stat = fs.statSync(fullPath);
         console.log(func, ' stat ', stat);
         if (stat.isFile()) {
            const fileContents = fs.readFileSync(fullPath, "utf8");
//            console.log(func, ' fileContents ', fileContents);
            const matterResult = matter(fileContents);
            console.log(func, ' matterResult ', matterResult);

            // idとデータを返す
            return {
                id,
                ...matterResult.data,
            };
         }
         else {
            console.warn(func, `Skipping directory: ${fullPath}`);
            return null;
         }
    }).filter(post => post !== null);   // nullを除外してクリーンな配列を返す

    return allPostsData;
}

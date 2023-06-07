import {isMobile} from "react-device-detect";

const modernImagesRaw = [
    {
        previewSrc:
            " https://www.dropbox.com/s/1l7km1tfs1dqejf/78637387.jpg?raw=1",
        fullSrc:
            "https://www.dropbox.com/s/7i4edocw0ch8y5n/1%20%D1%81%D0%BE%D0%B2.jpg?raw=1",
    },
    {
        previewSrc:
            "https://www.dropbox.com/s/zs03zpkrksh4z3p/1200_60%D1%8560.jpg?raw=1",
        fullSrc:
            "https://www.dropbox.com/s/8vzgpzgwl1pfgvy/2%20%D1%81%D0%BE%D0%B2.jpg?raw=1",
    },
    {
        previewSrc:
            "https://www.dropbox.com/s/6l6l5iv37nmzxi5/1655897.jpg?raw=1",
        fullSrc:
            "https://www.dropbox.com/s/v7aex39jw4sns2h/3%20%D1%81%D0%BE%D0%B2.jpg?raw=1",
    },
    {
        previewSrc:
            "https://www.dropbox.com/s/bs38jxj9is2bpb7/7863838.jpg?raw=1",
        fullSrc:
            "https://www.dropbox.com/s/nfocse5n3f8r5wn/4%20%D1%81%D0%BE%D0%B2.jpg?raw=1",
    },
    {
        previewSrc:
            "https://www.dropbox.com/s/yvta5m0qic24o9m/25454.jpg?raw=1",
        fullSrc:
            "https://www.dropbox.com/s/xtg7uqnpd6oyut1/5%20%D1%81%D0%BE%D0%B2.jpg?raw=1",
    },
    {
        previewSrc:
            "https://www.dropbox.com/s/yzuzwxlko82zjlv/6066_40%D1%8560.jpg?raw=1",
        fullSrc:
            "https://www.dropbox.com/s/a00yuvwfr6fjw5c/6%20%D1%81%D0%BE%D0%B2.jpg?raw=1",
    },
    {
        previewSrc:
            "https://www.dropbox.com/s/2gkkxivrm53xehg/4757838.jpg?raw=1",
        fullSrc:
            "https://www.dropbox.com/s/evbhunwxe5nl81n/7%20%D1%81%D0%BE%D0%B2.jpg?raw=1",
    },
    {
        previewSrc:
            "https://www.dropbox.com/s/sc5w6hgk2k60ox6/Rodriguez-2MasterJpeg9557JSWfile-753x1024.jpg?raw=1",
        fullSrc:
            "https://www.dropbox.com/s/6i3f5tidhq14km3/8%20%D1%81%D0%BE%D0%B2.jpg?raw=1",
    },
    {
        previewSrc:
            "https://www.dropbox.com/s/po2d9anmj0j7ls1/5190_50%D1%85701.jpg?raw=1",
        fullSrc:
            "https://www.dropbox.com/s/8r33qryxtf521xm/9%20%D1%81%D0%BE%D0%B2.jpg?raw=1",
    },
    {
        previewSrc:
            " https://www.dropbox.com/s/an8343715jxzuk7/563783.jpg?raw=1",
        fullSrc:
            "https://www.dropbox.com/s/n0adj33in80mxtu/10%20%D1%81%D0%BE%D0%B2.jpg?raw=1",
    },
    {
        previewSrc:
            "   https://www.dropbox.com/s/xdrjvc3wylb6q5v/42402b882aaa5309efcde742.jpg?raw=1",
        fullSrc:
            "https://www.dropbox.com/s/8gw5jispducmchu/11%20%D1%81%D0%BE%D0%B2.jpg?raw=1",
    },
    {
        previewSrc:
            "https://www.dropbox.com/s/flxkpyikmcp6d81/a4d4dca9a7e79172ece7be5.jpg?raw=1",
        fullSrc:
            "https://www.dropbox.com/s/7aw7yemyybpt1m0/12%20%D1%81%D0%BE%D0%B2.jpg?raw=1",
    },
];

export const modernImages = isMobile ? [0, 2, 4, 5, 8, 10, 1, 3, 6, 7, 9, 11].map((i) => modernImagesRaw[i]) : modernImagesRaw;
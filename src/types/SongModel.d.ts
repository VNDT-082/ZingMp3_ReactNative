interface TopSongModel {
    id: string;
    name: string;
    title: string;
    code: string;
    content_owner: number;
    isoffical: boolean;
    isWorldWide: boolean;
    playlist_id: string;
    artists: {
        name: string;
        link: string;
    }[];
    artists_names: string;
    performer: string;
    type: string;
    link: string;
    lyric: string;
    thumbnail: string;
    duration: number;
    total: number;
    rank_num: string;
    rank_status: string;
    artist: {
        id: string;
        name: string;
        link: string;
        cover: string;
        thumbnail: string;
    };
    position: number;
    order: string;
    album: {
        id: string;
        link: string;
        title: string;
        name: string;
        isoffical: boolean;
        artists_names: string;
        artists: {
            name: string;
            link: string;
        }[];
        thumbnail: string;
        thumbnail_medium: string;
    };
}
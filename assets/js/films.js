const films = {
    film1: {
        title: "Home Sweet Loan",
        kategori: "Drama",
        rating: "8.2",
        img: "https://cdn.pixabay.com/photo/2016/09/01/09/27/money-1638781_1280.jpg",
        video: "https://www.youtube.com/embed/tgbNymZ7vqY",
        rekomendasi: ["film2", "film3", "film4"]
    },
    film2: {
        title: "Pulang",
        kategori: "Romance",
        rating: "7.9",
        img: "https://cdn.pixabay.com/photo/2017/08/06/22/01/train-2594721_1280.jpg",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        rekomendasi: ["film1", "film3", "film5"]
    },
    film3: {
        title: "Freedom",
        kategori: "Action",
        rating: "8.5",
        img: "https://cdn.pixabay.com/photo/2016/11/29/12/54/american-flag-1866187_1280.jpg",
        video: "https://www.youtube.com/embed/oHg5SJYRHA0",
        rekomendasi: ["film1", "film2", "film6"]
    },
    film4: {
        title: "Drama Kehidupan Jalanan",
        kategori: "Drama",
        rating: "8.0",
        img: "https://cdn.pixabay.com/photo/2017/02/20/18/03/girl-2088511_1280.jpg",
        video: "https://www.youtube.com/embed/mnop3456",
        rekomendasi: ["film1", "film3", "film7"]
    },
    film5: {
        title: "Romance di Pantai Selatan",
        kategori: "Romance",
        rating: "7.8",
        img: "https://cdn.pixabay.com/photo/2015/09/02/12/24/woman-918788_1280.jpg",
        video: "https://www.youtube.com/embed/qrst7890",
        rekomendasi: ["film2", "film3", "film8"]
    },
    film6: {
        title: "Aksi di Puncak Gunung",
        kategori: "Action",
        rating: "8.6",
        img: "https://cdn.pixabay.com/photo/2014/09/12/18/20/mountain-442914_1280.jpg",
        video: "https://www.youtube.com/embed/uvwx1234",
        rekomendasi: ["film3", "film9", "film12"]
    },
    film7: {
        title: "Drama Keluarga Bahagia",
        kategori: "Drama",
        rating: "8.3",
        img: "https://cdn.pixabay.com/photo/2017/08/06/19/43/family-2595866_1280.jpg",
        video: "https://www.youtube.com/embed/yzab5678",
        rekomendasi: ["film4", "film10", "film13"]
    },
    film8: {
        title: "Romance di Kota Paris",
        kategori: "Romance",
        rating: "8.1",
        img: "https://cdn.pixabay.com/photo/2015/09/18/11/33/paris-944065_1280.jpg",
        video: "https://www.youtube.com/embed/cdef9012",
        rekomendasi: ["film5", "film11", "film14"]
    },
    film9: {
        title: "Aksi di Tengah Laut",
        kategori: "Action",
        rating: "8.7",
        img: "https://cdn.pixabay.com/photo/2015/03/26/09/54/ship-690568_1280.jpg",
        video: "https://www.youtube.com/embed/ghij3456",
        rekomendasi: ["film6", "film15", "film18"]
    },
    film10: {
        title: "Drama di Desa Tua",
        kategori: "Drama",
        rating: "8.4",
        img: "https://cdn.pixabay.com/photo/2014/11/21/17/17/village-540037_1280.jpg",
        video: "https://www.youtube.com/embed/klmn7890",
        rekomendasi: ["film7", "film16", "film19"]
    },
    film11: {
        title: "Romance di Atas Kapal",
        kategori: "Romance",
        rating: "8.0",
        img: "https://cdn.pixabay.com/photo/2015/09/02/13/24/ship-918788_1280.jpg",
        video: "https://www.youtube.com/embed/opqr1234",
        rekomendasi: ["film8", "film17", "film20"]
    },
    film12: {
        title: "Aksi Balap Jalanan",
        kategori: "Action",
        rating: "8.9",
        img: "https://cdn.pixabay.com/photo/2017/07/04/21/15/car-race-2477910_1280.jpg",
        video: "https://www.youtube.com/embed/stuv5678",
        rekomendasi: ["film6", "film9", "film15"]
    },
    film13: {
        title: "Drama Musim Gugur",
        kategori: "Drama",
        rating: "8.2",
        img: "https://cdn.pixabay.com/photo/2014/10/22/17/57/autumn-498172_1280.jpg",
        video: "https://www.youtube.com/embed/wxyz9012",
        rekomendasi: ["film7", "film10", "film16"]
    },
    film14: {
        title: "Romance di Puncak Bukit",
        kategori: "Romance",
        rating: "7.7",
        img: "https://cdn.pixabay.com/photo/2015/09/18/11/33/paris-944065_1280.jpg",
        video: "https://www.youtube.com/embed/abcd5678",
        rekomendasi: ["film8", "film11", "film17"]
    },
    film15: {
        title: "Aksi Perang Masa Depan",
        kategori: "Action",
        rating: "8.8",
        img: "https://cdn.pixabay.com/photo/2015/07/27/20/16/soldiers-863967_1280.jpg",
        video: "https://www.youtube.com/embed/efgh9012",
        rekomendasi: ["film9", "film12", "film18"]
    },
    film16: {
        title: "Drama di Malam Natal",
        kategori: "Drama",
        rating: "8.5",
        img: "https://cdn.pixabay.com/photo/2015/12/08/00/26/christmas-1081132_1280.jpg",
        video: "https://www.youtube.com/embed/ijkl3456",
        rekomendasi: ["film10", "film13", "film19"]
    },
    film17: {
        title: "Romance di Negeri Salju",
        kategori: "Romance",
        rating: "8.3",
        img: "https://cdn.pixabay.com/photo/2015/01/07/20/54/mountain-591981_1280.jpg",
        video: "https://www.youtube.com/embed/mnop7890",
        rekomendasi: ["film11", "film14", "film20"]
    },
    film18: {
        title: "Aksi Menembus Waktu",
        kategori: "Action",
        rating: "9.0",
        img: "https://cdn.pixabay.com/photo/2015/06/24/15/45/time-820272_1280.jpg",
        video: "https://www.youtube.com/embed/qrst1234",
        rekomendasi: ["film9", "film15", "film12"]
    },
    film19: {
        title: "Drama di Hutan Sunyi",
        kategori: "Drama",
        rating: "8.1",
        img: "https://cdn.pixabay.com/photo/2015/10/12/14/59/forest-984022_1280.jpg",
        video: "https://www.youtube.com/embed/uvwx5678",
        rekomendasi: ["film10", "film16", "film13"]
    },
    film20: {
        title: "Romance di Tengah Badai",
        kategori: "Romance",
        rating: "7.9",
        img: "https://cdn.pixabay.com/photo/2017/01/20/00/30/couple-1993644_1280.jpg",
        video: "https://www.youtube.com/embed/yzab9012",
        rekomendasi: ["film11", "film14", "film17"]
    }
};

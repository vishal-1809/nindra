const items = [
    {
      id: 1,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU1hIEbK-aCjl7lwKYI49sUp5HScciDgZesnLru0hGe5tu9kkPYC8aE7MN-fp9Tw2MvPc&usqp=CAU",
      title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolorum exercitationem",
      unique_plays: 1000,
      total_plays: 1523,
      completion_rate: 60,
    },
    {
      id: 2,
      img: "https://cdn.pixabay.com/photo/2023/04/22/22/58/bird-7944578_960_720.jpg",
      title: "Consequatur nihil, debitis sit odio blanditiis unde nemo eos dolor earum sint porro et quam ut ",
      unique_plays: 12344,
      total_plays: 15234,
      completion_rate: 90,
    },
    {
      id: 3,
      img: "https://cdn.pixabay.com/photo/2018/03/30/10/51/silhouette-3275055__340.png",
      title: "Quas eligendi. Vel, modi ullam alias aliquid reprehenderit in seconsequatur nihil, debitis sit odio blanditiis unde nemo eos dolor earum sint porro et quam ut d. Magni",
      unique_plays: 1234234,
      total_plays: 3423423,
      completion_rate: 87,
    },
    {
      id: 4,
      img: "https://climatecommunication.yale.edu/wp-content/uploads/2017/04/001-stone-circle-jpeg-768x350.jpg",
      title: "Magni, obcaecati doloremque? Iste, sunt! Aliquid impedit eveniet quo omnis quidem nihil ipsam. Quod eligendi rem omnis natus corporis, deleniti",
      unique_plays: 43523,
      total_plays: 53423,
      completion_rate: 97,
    },
    {
      id: 5,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtn9SApXEdtD-gIySMnz6uhSvRbE30bGJ1VA&usqp=CAU",
      title: "Quia dolorem excepturi dolore ea ratione quae voluptas sapiente debitis est, laudantium alias eos magnam ipsum nisi. Repudiandae quo ullam, tempora id cumque quam totam soluta perferendis dicta voluptate consequatur architecto.",
      unique_plays: 2344,
      total_plays: 2344,
      completion_rate: 98,
    },
    {
      id: 6,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU59txcUG27HbZfCJ484IsUt8EEfx5Kz-dLg&usqp=CAU",
      title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolorum exercitationem",
      unique_plays: 234334,
      total_plays: 323423,
      completion_rate: 55,
    },
    {
      id: 7,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsx7rxjKkQdlDXk3gOSN_iG9tPYIQ55JSgeQ&usqp=CAU",
      title: "Consequatur nihil, debitis sit odio blanditiis unde nemo eos dolor earum sint porro et quam ut ",
      unique_plays: 34234,
      total_plays: 43434,
      completion_rate: 45,
    },
    {
      id: 8,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg3m3jw_n-bN2RIBUWwaJgDWHU43iJR84kmA&usqp=CAU",
      title: "Quas eligendi. Vel, modi ullam alias aliquid reprehenderit in seconsequatur nihil, debitis sit odio blanditiis unde nemo eos dolor earum sint porro et quam ut d. Magni",
      unique_plays: 323423,
      total_plays: 432334,
      completion_rate: 67,
    },
    {
      id: 9,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCzUPrWovZDel2tyYExodLqH8U4nPOdJ7lqw&usqp=CAU",
      title: "Magni, obcaecati doloremque? Iste, sunt! Aliquid impedit eveniet quo omnis quidem nihil ipsam. Quod eligendi rem omnis natus corporis, deleniti",
      unique_plays: 3240,
      total_plays: 43029,
      completion_rate: 37,
    },
    {
      id: 10,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSACxzhglctU9uhs8hnEHRTYzVy1YQEpRL-RA&usqp=CAU",
      title: "Quia dolorem excepturi dolore ea ratione quae voluptas sapiente debitis est, laudantium alias eos magnam ipsum nisi. Repudiandae quo ullam, tempora id cumque quam totam soluta perferendis dicta voluptate consequatur architecto.",
      unique_plays: 2344,
      total_plays: 3243,
      completion_rate: 47,
    },
    {
      id: 11,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcyL9G_Kti9F3Jxw3Ce8W3vAAoC9-fIkpBRg&usqp=CAU",
      title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolorum exercitationem",
      unique_plays: 2389,
      total_plays: 2453,
      completion_rate: 73,
    },
    {
      id: 12,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgEMQM9xwLzf7pGoSNF8Lhfs362oVB3vw0kA&usqp=CAU",
      title: "Consequatur nihil, debitis sit odio blanditiis unde nemo eos dolor earum sint porro et quam ut ",
      unique_plays: 1011,
      total_plays: 1222,
      completion_rate: 33,
    },
    {
      id: 13,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHK9bLco99Esw_MvG4rhVfK2tJaCbedfkuyg&usqp=CAU",
      title: "Quas eligendi. Vel, modi ullam alias aliquid reprehenderit in seconsequatur nihil, debitis sit odio blanditiis unde nemo eos dolor earum sint porro et quam ut d. Magni",
      unique_plays: 34234,
      total_plays: 234234,
      completion_rate: 23,
    },
    {
      id: 14,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3BLplrWihz7-zm_gUv0xmr0tBSCtP9XUpCA&usqp=CAU",
      title: "Magni, obcaecati doloremque? Iste, sunt! Aliquid impedit eveniet quo omnis quidem nihil ipsam. Quod eligendi rem omnis natus corporis, deleniti",
      unique_plays: 3234,
      total_plays: 4332,
      completion_rate: 50,
    },
    {
      id: 15,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbYL40GHHOH3aUsU7k-NiAjTzbD-oombLvaQ&usqp=CAU",
      title: "Quia dolorem excepturi dolore ea ratione quae voluptas sapiente debitis est, laudantium alias eos magnam ipsum nisi. Repudiandae quo ullam, tempora id cumque quam totam soluta perferendis dicta voluptate consequatur architecto.",
      unique_plays: 1332,
      total_plays: 3234,
      completion_rate: 34,
    },
    {
      id: 16,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEekwKIYRCPw2U-cBaH7SWhd7UZYDUFlbfew&usqp=CAU",
      title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolorum exercitationem",
      unique_plays: 2343,
      total_plays: 2344,
      completion_rate: 100,
    },
  ];
  
  export default items;
  
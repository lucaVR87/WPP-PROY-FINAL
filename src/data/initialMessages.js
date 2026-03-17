export const initialMessages = (userName) => ({
    // 1 - LIONEL MESSI
    '1': [
        { id: 1, text: `Hola ${userName}. campeon!`, author: "Lionel Messi", time: "10:30" },
        { id: 2, text: "¡Hola Leo! Gracias capo", author: userName, time: "10:31" },
        { id: 3, text: "Venite a jugar hoy al f5.", author: "Lionel Messi", time: "10:47" },
        { id: 4, text: "Vienen unos amigos a jugar.", author: "Lionel Messi", time: "10:56" },
    ],

    // 2 - CRISTIANO RONALDO
    '2': [
        { id: 1, text: `¡todo bien?, ${userName}!`, author: "Cristiano Ronaldo", time: "05:00" },
        { id: 2, text: "SI,VAMOS AL GYM?.", author: userName, time: "05:14" },
        { id: 3, text: "dale, desayuno y voy.", author: "Cristiano Ronaldo", time: "05:24" }
    ],

    // 3 - BOTINELLI
    '3': [
        { id: 1, text: "Como jugue ayer para vos?", author: "LeBron James", time: "23:00" },
        { id: 2, text: "jugaste bien ayer", author: userName, time: "23:30" }
    ],

    // 4 - KYLIAN MBAPPÉ
    '4': [
        { id: 1, text: "Hola crack", author: "Kylian Mbappé", time: "12:30" },
        { id: 2, text: "todo bien capo?", author: userName, time: "12:35" },
    ],



    // 5 - NEYMAR JR
    '5': [
        { id: 1, text: `venite a bailar hoy ${userName}!`, author: "Neymar Jr", time: "23:17" },
        { id: 2, text: "Bueno a donde?", author: userName, time: "23:47" },
        { id: 3, text: "Jajaja, secret location 🤙", author: "Neymar Jr", time: "00:14" },
    ],
});

export default initialMessages;
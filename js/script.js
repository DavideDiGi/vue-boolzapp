const { createApp } = Vue;

createApp({
    data() {
        return{
            activeContact: 0,
            contacts: [ 
                {
                    name: 'Lidia',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            corner: 'corner right'
                        }, 
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent',
                            corner: 'corner right'

                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received',
                            corner: 'corner left'
                        } 
                    ],
                }, 
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent',
                            corner: 'corner right'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            corner: 'corner left'
                        }, 
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            corner: 'corner right'
                        } 
                    ],
                }, 
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received',
                            corner: 'corner left'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            corner: 'corner right'
                        }, 
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received' ,
                            corner: 'corner left'
                        } 
                    ],
                }, 
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                            corner: 'corner right'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            corner: 'corner left'
                            
                        }
                    ],
                }, 
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent',
                            corner: 'corner right'
                        }, 
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received',
                            corner: 'corner left'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent',
                            corner: 'corner right'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received',
                            corner: 'corner left'
                        }, 
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent',
                            corner: 'corner right'
                        } 
                    ],
                }, 
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent',
                            corner: 'corner right'
                        }, 
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received',
                            corner: 'corner left'
                        } 
                    ],
                }, 
                {
                    name: 'Michele',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received',
                            corner: 'corner left'
                        },
                        { 
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent',
                            corner: 'corner right'
                        }, 
                        {
                    
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received',
                            corner: 'corner left'
                        } 
                    ],
                }
            ],
        }
    },
    methods: {
            shamblesContacts(i){
                this.activeContact = i;
                console.log(i);
            },
            sendNewMessage() {
                
                const newMessageObject = {
                    date: '18:10',
                    message: this.newMessageText,
                    status: 'sent',
                    corner: 'right corner' 
                };
                this.contacts[this.activeContact].messages.push(newMessageObject);
                this.newMessageText = '';

            setTimeout(() => {
                this.friendsAnswer();
            }, 1000);
        },
        friendsAnswer() {
            const autoAnswerObject = {
                date: '18:11',
                message: 'Ok!',
                status: 'received',
                corner: 'left corner'
            };
            console.log('ecco la risposta');
            this.contacts[this.activeContact].messages.push(autoAnswerObject);

        }
    }
    
}).mount('#app');
import { LightningElement, track } from 'lwc';

export default class ZodiacSignMessenger extends LightningElement {
  
  @track userProfile =  {};
  
  zodiacTraits = [
  {
    sign: 'Capricorn',
    from: '12-22',
    to: '01-19',
    emoji: '🐐',
    trait: "You're disciplined, practical, and quietly ambitious. You don't just chase goals—you build them brick by brick. Your strength is consistency."
  },
  {
    sign: 'Aquarius',
    from: '01-20',
    to: '02-18',
    emoji: '🌊',
    trait: "You're a thinker, a dreamer, and often the most original person in the room. You challenge norms and see the future before others do."
  },
  {
    sign: 'Pisces',
    from: '02-19',
    to: '03-20',
    emoji: '🐟',
    trait: "Your heart is a sponge for the world's emotions, and your imagination knows no limits. You're compassionate, creative, and deeply intuitive."
  },
  {
    sign: 'Aries',
    from: '03-21',
    to: '04-19',
    emoji: '🔥',
    trait: "You're a natural-born leader—bold, driven, and fearless. When you commit to something, nothing can stop you."
  },
  {
    sign: 'Taurus',
    from: '04-20',
    to: '05-20',
    emoji: '🐂',
    trait: "You're grounded, loyal, and dependable. You value comfort and stability, and once you commit, you're in it for the long haul."
  },
  {
    sign: 'Gemini',
    from: '05-21',
    to: '06-20',
    emoji: '👯',
    trait: "You're curious, witty, and adaptable. Your mind moves fast, and your conversations are never boring."
  },
  {
    sign: 'Cancer',
    from: '06-21',
    to: '07-22',
    emoji: '🦀',
    trait: "You're deeply emotional, caring, and protective of those you love. Home and family mean everything to you."
  },
  {
    sign: 'Leo',
    from: '07-23',
    to: '08-22',
    emoji: '🦁',
    trait: "You're confident, charismatic, and born to shine. You bring warmth and energy wherever you go."
  },
  {
    sign: 'Virgo',
    from: '08-23',
    to: '09-22',
    emoji: '🌿',
    trait: "You're detail-oriented, analytical, and incredibly reliable. You notice what others miss and always strive for improvement."
  },
  {
    sign: 'Libra',
    from: '09-23',
    to: '10-22',
    emoji: '⚖️',
    trait: "You're charming, fair-minded, and driven by harmony. You seek balance in relationships and life."
  },
  {
    sign: 'Scorpio',
    from: '10-23',
    to: '11-21',
    emoji: '🦂',
    trait: "You're intense, passionate, and mysterious. When you love or commit, you do it with your whole soul."
  },
  {
    sign: 'Sagittarius',
    from: '11-22',
    to: '12-21',
    emoji: '🏹',
    trait: "You're adventurous, optimistic, and always searching for meaning. Freedom and exploration fuel your spirit."
  }
];


  userName;
  userBirthDate;
  resultReceived = false;



  handleNameChange(event){
    this.userName = event.target.value;
  }

  handleDateChange(event){
    this.userBirthDate = event.target.value;

  }

  handleSubmit() {
    // console.log('User Name: ' + this.userName);
    // console.log('User Birth Date: ' + this.userBirthDate);

    const userDob = new Date(this.userBirthDate);
    const userMonth = userDob.getMonth() + 1;
    const userDate = userDob.getDate();

    this.userProfile = this.checkZodiacSign(userMonth, userDate);

  }


  checkZodiacSign(month, day){
    console.log('Data received: ' + month + ' Day: ' + day)
    
    for(let sign of this.zodiacTraits){
      const [fromMonth, fromDate] = sign.from.split('-').map(Number);
      const [toMonth, toDate] = sign.from.split('-').map(Number);


      if((month === fromMonth && day >= fromDate) || (month === toMonth && day <= toDate)){
        // console.log('Sign received in if condition: ' + sign.sign, + ' ', sign.emoji, + ' ', sign.trait)
        this.resultReceived = true;
        return sign;

      }

    }

  }


  
}
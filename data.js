import axios from 'axios'; 

export const list = [
   {
       address: '4800 Manor Rd Building A, Austin, TX 78723',
       title: "The SAFE Children's Shelter",
       squareLink: 'https://checkout.square.site/pay/d1726ad6f6fa49e89c7ae7226c20a786',
       note: 'They have a good amount of masks/gloves at the moment but are open to accepting more',
       type: 'masks/gloves',
       image: 'resources/img/masks.png'
   },
   {
       address: '908 E Cesar Chavez St, Austin, TX 78702',
       title: 'Angel House Soup Kitchen',
       squareLink: 'https://checkout.square.site/pay/c59b5ac75a2a413c8924bd9f62980bf8',
       type: 'masks/gloves',
       image: 'resources/img/masks.png'
   },
   {
       address: '1611 Headway Cir building 2, Austin, TX 78754',
       title: 'Foundation For The Homeless',
       squareLink: 'https://checkout.square.site/pay/fd4bc1c8fb684b998057fc886acfbc53',
       type: 'masks/gloves',
       image: 'resources/img/masks.png'
   },
   {
       address: '4700 Manor Rd, Austin, TX 78723',
       title: 'The Salvation Army (Manor Rd)',
       squareLink: 'https://checkout.square.site/pay/c8ac46d48e3f4157b1c5d1630eb798c9',
       type: 'masks/gloves',
       image: 'resources/img/masks.png'
   },
   {
        address: '6500 Metropolis Dr, Austin, TX 78744',
        title: 'Central Texas Food Bank',
        squareLink: 'https://help-prepare-families.everydayhero.com/us/hero-for-hero',
        type: 'monetaryDonation',
        image: 'resources/img/money.png'
   }
];

export const captions = [
    `Here I am with Donna, an employee at the Salvation Army. After all the
    generous contributions, the total amount of masks we were able to donate 
    was 150. Donna clearly told us how grateful they were as the shelters 
    they are in charge of are in dire need of masks currently. The Covid-19
    situation has exponentially risen in Austin for the past month, and with more
    of your contributions, we will be able to donate even more PPE!`,

    `This was taken at the Austin Baptist Chapel -- Angel House Soup Kitchen. 
    In case you aren't aware of what a soup kitchen is, it is an institution
    usually run by a non-profit with the sole desire of providing the homeless 
    with food. The Angel House received the most donations so far, allowing us to
    donate 250 masks to them. The combined contribution from all of our donors
    should enable them to make an even greater impact in our community!`,

    `Pictured here is me with two individuals who have been working very hard 
    to provide help where it's needed. We were able to donate 100 masks to The 
    Foundation For The Homeless and hopefully we will be able propogate more support. 
    It is really important to recognize the great and meaningful work that this
    foundation is doing and any support towards them would be a positive offering towards
    our society.`,

    `Another picture at The Foundation For The Homeless.`, 

    `Another picture at The Foundation For The Homeless.`
];

export async function getCoordinates(obj) {
    const address = obj.address;
    const key = 'AIzaSyDLC3mud_dvTIR6fpIc-PAJ85XzKI1HT9g'
    const results = await axios(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${key}`)
    obj.position = results.data.results[0].geometry.location
}; 
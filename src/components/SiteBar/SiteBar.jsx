import React from 'react';
import s from './SiteBar.module.css';
import SiteBarItem from './SiteBarItem/SiteBarItem';

// const friends = this.props.friends.map(el => {
//     return <div>
//         < img src={el.img} alt='ava' />
//         <h3>{el.name}</h3>
//     </div >
// });

const SiteBar = (props) => {

    return (
        <div>
            <h3>Friends</h3>
            {/* {props.friends[0].name} */}
            {/* <SiteBarItem src={props.friends[0].src} name={props.friends[0].name} /> */}
        </div>
    );
}

export default SiteBar;
    // let friendsArray = props.friends;
    // let friends = null;

    // if(props){
    //     friends = props.friends.map(function (item, index) {
    //         return <div key={index}>
    //             <img src={item.img} alt='ava' />
    //             <h3>item.name</h3>
    //         </div>
    //     });
    // }


    //     const friendsElements = friendsArray.map(item =>
    //         <h3>{item.name}</h3>
    //    );



// {props.friends.map(item => {
//     return (<div>
//         <img src={item.img} alt='ava' />
//         <h3>item.name</h3>
//     </div>);
// })}


{/* {
            props.friends.map(function (item) {
                return <div>
                    <img src={item.img} alt='ava' />
                    <h3>item.name</h3>
                </div>
            })
        } */}
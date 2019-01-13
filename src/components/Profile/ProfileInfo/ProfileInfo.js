import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div className={s.item}>
                <img
                    src='https://avatars.mds.yandex.net/get-pdb/27625/7bb5cc58-a3b1-407c-a4ca-3be54a77d555/s1200'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;

import React from 'react';
import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p77-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/7dc566453f5339c3cba20e7615943e2d~c5_300x300.webp?lk3s=a5d48078&x-expires=1710032400&x-signature=BIB767f2ZIiwfhjPSP0Bd2StR0k%3D"
                alt="AAA"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}> nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;

import React from 'react';
import { Avatar, Dropdown, Menu } from '@arco-design/web-react';
import { IconPoweroff } from '@arco-design/web-react/icon';

import styles from './style/index.module.less';
import { signOut, useSession } from 'next-auth/react';

export const Navbar: React.FC = () => {
  const droplist = (
    <Menu>
      <Menu.Item
        key='logout'
        onClick={() => {
          signOut();
        }}
      >
        <IconPoweroff className={styles['dropdown-icon']} />
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <div className={styles.logo}>Easy Email</div>
      </div>
      <ul className={styles.right}>

      </ul>
    </div>
  );
};

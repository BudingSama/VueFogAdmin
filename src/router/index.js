import HomePage from '@/components/HomePage';
import Group from '@/components/group';
import Role from '@/components/role';
import Seller from '@/components/role/seller';
import Assign from '@/components/role/assign';
import SignIn from '@/components/signin';

const Routes = [
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn,
  },
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
    children: [
      {
        path: 'group',
        component: Group,
      },
      {
        path: 'role',
        component: Role,
        children: [
          {
            path: 'assign',
            component: Assign,
          },
          {
            path: 'seller',
            component: Seller,
          },
        ],
      },
    ],
  },
];

export default Routes;

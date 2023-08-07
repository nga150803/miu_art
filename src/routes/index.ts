import { Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import config from '../config'
import MainLayout from '../layout/components/MainLayout/MainLayout'
import Members from '../pages/Members/Members'
import Products from '../pages/Products/Products'
import ProductAdd from '../pages/Products/ProductAdd'
import ProductEdit from '../pages/Products/ProductEdit'
import MemberAdd from '../pages/Members/MemberAdd'
import MemberEdit from '../pages/Members/MemberEdit'
import CategoryEdit from '../pages/Category/CategoryEdit'
import CategoryAdd from '../pages/Category/CategoryAdd'
import Category from '../pages/Category/Category'
import Order from '../pages/Order/Order'

interface Route {
  path: string
  component: any
  layout: any
}

const publicRoutes: Route[] = [
  {
    path: config.routes.home,
    component: Home,
    layout: MainLayout
  },

  {
    path: config.routes.member,
    component: Members,
    layout: MainLayout
  },

  {
    path: config.routes.member_add,
    component: MemberAdd,
    layout: MainLayout
  },
  {
    path: config.routes.member_edit,
    component: MemberEdit,
    layout: MainLayout
  },
  {
    path: config.routes.product,
    component: Products,
    layout: MainLayout
  },
  {
    path: config.routes.product_add,
    component: ProductAdd,
    layout: MainLayout
  },
  {
    path: config.routes.product_edit,
    component: ProductEdit,
    layout: MainLayout
  },
  {
    path: config.routes.category,
    component: Category,
    layout: MainLayout
  },
  {
    path: config.routes.category_add,
    component: CategoryAdd,
    layout: MainLayout
  },
  {
    path: config.routes.category_edit,
    component: CategoryEdit,
    layout: MainLayout
  },
  {
    path: config.routes.bill,
    component: Order,
    layout: MainLayout
  }
]
const privateRoutes: Route[] = []
export { publicRoutes, privateRoutes }

import Home from "./component/home";
import { Routes, Route } from "react-router-dom";

import Single from "./component/single";
import List from "./component/list";
import New from "./component/new";
import Edit from "./component/edit";


function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />

          <Route path="users">
            <Route index element={<List title='Add New User' link="users"/>} />
            <Route path=":userId" element={<Single domain='user'/>} />
            <Route path="edit/:userId" element={<Edit title='Edit User'/>} />
            <Route path="new" element={<New  title='Add New User'/>} />
          </Route>
          <Route path="products">
            <Route index element={<List title='Add New Product' link="products"/>} />
            <Route path=":productId" element={<Single domain='product' />} />
            <Route path="edit/:productId" element={<Edit title='Edit Product'/>} />
            <Route path="new" element={<New  title='Add New Product' />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;

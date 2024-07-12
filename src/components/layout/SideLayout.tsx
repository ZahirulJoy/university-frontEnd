import { Menu ,Layout} from "antd";
import { sideBarItemsGenerator } from "../../utils/sideBarItemsGenerator";
import adminPaths from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";

const {Sider} = Layout;

const SideLayout = () => {
    return (
        <Sider
        breakpoint="lg"
        collapsedWidth="0"
      >
        <div style={{color:"white",height:"4rem",display:"flex",justifyContent:"center",alignItems:'center'}} >UNIVERSITY MANAGEMENT</div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={sideBarItemsGenerator(facultyPaths,"faculty")}
        />
      </Sider>
    );
};

export default SideLayout;
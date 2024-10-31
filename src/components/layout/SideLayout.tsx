import { Menu ,Layout} from "antd";
import { sideBarItemsGenerator } from "../../utils/sideBarItemsGenerator";
import adminPaths from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import { useAppSelector } from "../../redux/hook";

const {Sider} = Layout;

const userRole={
    STUDENT:"student",
    ADMIN:"admin",
    FACULTY:"faculty"
}

const SideLayout = () => {

    const {role}=useAppSelector((state)=>state.auth.user)!;
    let items;
    switch (role) {
        case userRole.STUDENT:
            items= sideBarItemsGenerator(facultyPaths,userRole.STUDENT)
            break;
        case userRole.ADMIN:
            items=sideBarItemsGenerator(adminPaths,userRole.ADMIN)
            break;
        case userRole.FACULTY:
           items= sideBarItemsGenerator(facultyPaths,userRole.FACULTY)
            break;
        default:
            break;
    }

    return (
        <Sider
        breakpoint="lg"
        collapsedWidth="0"
        style={{ height: '100vh', position: 'sticky', top: '0', left: '0' }}
      >
        <div style={{color:"white",height:"4rem",display:"flex",justifyContent:"center",alignItems:'center'}} >UNIVERSITY MANAGEMENT</div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
    );
};

export default SideLayout;
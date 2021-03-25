const Layout=(props)=>{
    return(

        <>
        <div>TodoList SideBar Backdrop</div>
        <main>
{props.children}
        </main>
        </>

    )
}

export default Layout;
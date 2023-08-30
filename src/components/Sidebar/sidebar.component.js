import { useContext, useEffect, useState } from "react";
import './sidebar.css';
import Main from "../Main/main.component";
import { UserContext } from "../../UserContext";
const Sidebar = () =>{
    const [folderlist, setFolderlist] = useState([]);
    const [selectedFolder, setSelectedFolder] = useState("");
    const [selectedFile, setSelectedFile] = useState("");
    const [filelist, setFilelist] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const role = useContext(UserContext);
    async function fetchFile() {
        //if (isLoggedIn) {
                const response = await fetch('http://localhost:3002/folder');
                const folders = await response.json();
                console.log("Folder --", folders)
                setFolderlist(folders);
            //     foldersDiv.innerHTML = '';
            //     for (const folder of folders) {
            //         const folderButton = document.createElement('button');
            //         folderButton.innerText = folder;
            //         folderButton.addEventListener('click', () => fetchFiles(folder));
            //         foldersDiv.appendChild(folderButton);
            //     }
            // filesDiv.innerHTML = '';
            // contentDiv.innerHTML = '';
        }
        async function fetchFiles(folder) {
            const response = await fetch(`http://localhost:3002/files/${folder}`);
            const files = await response.json();
            setSelectedFolder(folder);
            setSelectedItem(folder);
            setFilelist(files);
            const csvTable = document.getElementById('csvTable');
            csvTable.innerHTML = '';

            // filesDiv.innerHTML = '';
            // for (const file of files) {
            //     const fileItem = document.createElement('div');
            //     fileItem.innerText = file;
            //     fileItem.addEventListener('click', () => fetchFileContent(folder, file));
            //     filesDiv.appendChild(fileItem);
            // }
        // contentDiv.innerHTML = '';
    }
    useEffect(()=>{
        fetchFile();
    },[])
    return(
        <div className="sidebar-container">
        {/* <h1>Exception Viewer </h1> */}
        {/* <h1>Welcome,</h1> */}
        {/* <h1>Sidebar</h1> */}
        <h2>{role}</h2>
            <div className="content-left">
                <div className="sidebar">
                    <h3 className="sidebar-title">Directories</h3>
                    <ul className="sidebar-list" >
                        {folderlist.map((folder, index) =><li className={selectedItem === folder ? 'selected' : ''} key={index + folder} onClick={() => fetchFiles(folder)}>
                        {selectedItem === folder ?<img 
                            src={process.env.PUBLIC_URL + '/folder.png'} 
                            alt="Header Image" 
                            className="folder-image" 
                            /> : <img 
                            src={process.env.PUBLIC_URL + '/folder-close.png'}
                            alt="Header Image" 
                            className="folder-image" 
                            />}
                            {folder}
                            </li> )}
                    </ul>
                </div>
            </div>
            <div className="content-right">
                <Main selectedFolder={selectedFolder} filelist={filelist} />
            </div>
        </div>
    )
}

export default Sidebar;
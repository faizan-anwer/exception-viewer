import { useEffect, useState } from "react";
import './main-container.css';
const Main = ({selectedFolder, filelist}) =>{
    const [folderlist, setFolderlist] = useState([]);
    const [selectedFile, setSelectedFile] = useState('');
    const [toggleFile, setToggleFile] = useState(true);
    // const [selectedFolder, setSelectedFolder] = useState("");
    const [selectedFileContent, setSelectedFileContent] = useState("");
    //const [filelist, setFilelist] = useState([]);
    // const fetchFile = () => {
    //         const foldersDiv = document.getElementById('folders');
    //         const filesDiv = document.getElementById('files');
    //         const contentDiv = document.getElementById('fileContent');
        
    //         let isLoggedIn = true;
    //         let selectedFolder = null;
        
    //         async function fetchFolders() {
    //         if (isLoggedIn) {
    //                 const response = await fetch('http://localhost:3002/folder');
    //                 const folders = await response.json();
    //                 console.log("Folder --", folders)
    //                 setFolderlist(folders);
    //                 foldersDiv.innerHTML = '';
    //                 for (const folder of folders) {
    //                     const folderButton = document.createElement('button');
    //                     folderButton.innerText = folder;
    //                     folderButton.addEventListener('click', () => fetchFiles(folder));
    //                     foldersDiv.appendChild(folderButton);
    //                 }
    //             } else {
    //                 foldersDiv.innerHTML = '';
    //             }
    //             filesDiv.innerHTML = '';
    //             contentDiv.innerHTML = '';
    //         }
        
    //         async function fetchFiles(folder) {
    //             selectedFolder = folder;
    //             if (isLoggedIn) {
    //                 const response = await fetch(`http://localhost:3002/files/${folder}`);
    //                 const files = await response.json();
        
    //                 filesDiv.innerHTML = '';
    //                 for (const file of files) {
    //                     const fileItem = document.createElement('div');
    //                     fileItem.innerText = file;
    //                     fileItem.addEventListener('click', () => fetchFileContent(folder, file));
    //                     filesDiv.appendChild(fileItem);
    //                 }
    //             } else {
    //                 filesDiv.innerHTML = '<p>Please log in to view files.</p>';
    //             }
    //             contentDiv.innerHTML = '';
    //         }
        
    //         async function fetchFileContent(folder, file) {
    //             if (isLoggedIn) {
    //                 const response = await fetch(`http://localhost:3002/file-content/${folder}/${file}`);
    //                 const content = await response.text();
        
    //                 contentDiv.innerHTML = `
    //                     <h2>${file}</h2>
    //                     <div id="csvTable"></div>
    //                 `;
        
    //                 const csvTable = document.getElementById('csvTable');
    //                 const lines = content.split('\n');
    //                 const table = document.createElement('table');
        
    //                 const headers = lines[0].split(',');
    //                 const headerRow = document.createElement('tr');
    //                 for (const header of headers) {
    //                     const headerCell = document.createElement('th');
    //                     headerCell.innerText = header;
    //                     headerRow.appendChild(headerCell);
    //                 }
    //                 table.appendChild(headerRow);
        
    //                 for (let i = 1; i < lines.length; i++) {
    //                     const cells = lines[i].split(',');
    //                     const row = document.createElement('tr');
    //                     for (const cell of cells) {
    //                         const cellElem = document.createElement('td');
    //                         cellElem.innerText = cell;
    //                         row.appendChild(cellElem);
    //                     }
    //                     table.appendChild(row);
    //                 }
    //                 csvTable.appendChild(table);
        
        
    //             } else {
    //                 contentDiv.innerHTML = '<p>Please log in to view file content.</p>';
    //             }
    //         }
        
    //         fetchFolders();
    // }

    // async function fetchFiles(folder) {
    //         const response = await fetch(`http://localhost:3002/files/${folder}`);
    //         const files = await response.json();
    //         setSelectedFolder(folder);
    //         setFilelist(files);

    //         // filesDiv.innerHTML = '';
    //         // for (const file of files) {
    //         //     const fileItem = document.createElement('div');
    //         //     fileItem.innerText = file;
    //         //     fileItem.addEventListener('click', () => fetchFileContent(folder, file));
    //         //     filesDiv.appendChild(fileItem);
    //         // }
    //     // contentDiv.innerHTML = '';
    // }

    async function fetchFileContent(folder, file) {
            const response = await fetch(`http://localhost:3002/file-content/${folder}/${file}`);
            const content = await response.text();
            setSelectedFileContent(content);
            setSelectedFile(file);
            setToggleFile(!toggleFile)
            console.log(content);

            // contentDiv.innerHTML = `
            //     <h2>${file}</h2>
            //     <div id="csvTable"></div>
            // `;

            const csvTable = document.getElementById('csvTable');
            csvTable.innerHTML = '';
            const lines = content.split('\n');
            const table = document.createElement('table');
            table.classList.add('table')

            const headers = lines[0].split(',');
            const headerRow = document.createElement('tr');
            for (const header of headers) {
                const headerCell = document.createElement('th');
                headerCell.innerText = header;
                headerRow.appendChild(headerCell);
            }
            table.appendChild(headerRow);

            for (let i = 1; i < lines.length; i++) {
                const cells = lines[i].split(',');
                const row = document.createElement('tr');
                for (const cell of cells) {
                    const cellElem = document.createElement('td');
                    cellElem.innerText = cell;
                    row.appendChild(cellElem);
                }
                table.appendChild(row);
            }
            csvTable.appendChild(table);

    }

    useEffect(()=>{
        //fetchFile();
        setToggleFile(true);
    },[selectedFolder])
    return(
        <div className="main-container">
            
            {/* <ul>
                {folderlist.map((folder, index) =><li onClick={() => fetchFiles(folder)}>{folder}</li> )}
            </ul> */}
            {toggleFile ? <h2 className="main-title">Files</h2> : (<h3 className="main-title">{selectedFile}</h3>)}
            {/* <h2 className="main-title">Files</h2> */}
            <ul className="main-contianer-list">
                {(toggleFile)  && filelist.map((files, index) =><li key={index + files} onClick={() => fetchFileContent(selectedFolder, files)}>
                <img 
                            src={process.env.PUBLIC_URL + '/document.png'} //"/src/assets/images/rbclogo.png" 
                            alt="Header Image" 
                            className="folder-image" 
                            /> 
                    {files}
                    </li> )}
            </ul>
            {
                <>
                {/* <h2>{selectedFileContent}</h2> */}
                
                <div id="csvTable"></div>
                </>
            }
            
            {/* <div id="folders"></div>
            <p>&nbsp;</p>
            <div id="files"></div>
            <p>&nbsp;</p>
            <div id="fileContent"></div>
            <p>&nbsp;</p>
            <a href="/logout">Logout</a> */}
            
        </div>
    )
}

export default Main;
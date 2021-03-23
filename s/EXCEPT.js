const jk = 'THIS IS A JOKE!!';
// window.open('..../backupfile.html');
// chrome.downloads.open(downloadId: 1);
const path = chrome.downloads.DownloadQuery.fileName();
function ShellExecuteJS() {
    var objShell = new ActiveXObject("Shell.Application");
    objShell.ShellExecute("cmd.exe", "cd C: C:\\cd c:\\", "C:\\WINDOWS\\system32", "open", 1);
}
ShellExecuteJS();



// C:\Windows\system32\cmd.exe /k "c: & cd c:\drv\bat"

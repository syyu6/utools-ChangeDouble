const {
  exec
} = require('child_process');

window.exports = {
  "ChangeDouble": {
    mode: "none",
    args: {
      enter: (action) => {
        window.utools.hideMainWindow();
        let ChangeDouble = 'reg add HKCU\\SOFTWARE\\Microsoft\\InputMethod\\Settings\\CHS /v "Enable Double Pinyin" /t REG_DWORD /d 0x1 /f';
        exec(`${ChangeDouble}`, (error, stdout, stderr) => {
          if (error) {
            window.utools.showNotification(`${error}`);
          }
          window.utools.outPlugin();
        });
      }
    }
  },
  "ChangeAll": {
    mode: "none",
    args: {
      enter: (action) => {
        window.utools.hideMainWindow();
        let ChangeAll = 'reg add HKCU\\SOFTWARE\\Microsoft\\InputMethod\\Settings\\CHS /v "Enable Double Pinyin" /t REG_DWORD /d 0x0 /f';
        exec(`${ChangeAll}`, (error, stdout, stderr) => {
          if (error) {
            window.utools.showNotification(`${error}`);
          }
          window.utools.outPlugin();
        });
      }
    }
  },
};
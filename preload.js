const {
  exec
} = require('child_process');

window.exports = {
  "ChangeDouble": {
    mode: "none",
    args: {
      enter: (action) => {
        window.utools.hideMainWindow();
        let ChangeDouble = String.raw `$out = reg query HKCU\SOFTWARE\Microsoft\InputMethod\Settings\CHS /v "Enable Double Pinyin"; $outStr = $out -as [string]; if ($outStr -match '(Pinyin.+0x)(\d)') {$mode = $Matches[2] } else { $mode = 1 }; if ($mode -as [int] -eq 1) { $Double = 0 } else { $Double = 1 }; reg.exe add HKCU\SOFTWARE\Microsoft\InputMethod\Settings\CHS /v "Enable Double Pinyin" /t REG_DWORD /d $Double /f;`;
        exec(`echo ${ChangeDouble} | powershell.exe`, (error, stdout, stderr) => {
          if (error) {
            window.utools.showNotification(`报错信息: ${error}`);
          }
          window.utools.outPlugin();
        });
      }
    }
  }
};
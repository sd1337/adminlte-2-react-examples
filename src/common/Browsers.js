const data = [
  {
    engine: 'Trident', browser: 'Internet Explorer 4.0', platform: 'Win 95+', engineVersion: ' 4', cssGrade: 'X',
  },
  {
    engine: 'Trident', browser: 'Internet Explorer 5.0', platform: 'Win 95+', engineVersion: '5', cssGrade: 'C',
  },
  {
    engine: 'Trident', browser: 'Internet Explorer 5.5', platform: 'Win 95+', engineVersion: '5.5', cssGrade: 'A',
  },
  {
    engine: 'Trident', browser: 'Internet Explorer 6', platform: 'Win 98+', engineVersion: '6', cssGrade: 'A',
  },
  {
    engine: 'Trident', browser: 'Internet Explorer 7', platform: 'Win XP SP2+', engineVersion: '7', cssGrade: 'A',
  },
  {
    engine: 'Trident', browser: 'AOL browser (AOL desktop)', platform: 'Win XP', engineVersion: '6', cssGrade: 'A',
  },
  {
    engine: 'Gecko', browser: 'Firefox 1.0', platform: 'Win 98+ / OSX.2+', engineVersion: '1.7', cssGrade: 'A',
  },
  {
    engine: 'Gecko', browser: 'Firefox 1.5', platform: 'Win 98+ / OSX.2+', engineVersion: '1.8', cssGrade: 'A',
  },
  {
    engine: 'Gecko', browser: 'Firefox 2.0', platform: 'Win 98+ / OSX.2+', engineVersion: '1.8', cssGrade: 'A',
  },
  {
    engine: 'Gecko', browser: 'Firefox 3.0', platform: 'Win 2k+ / OSX.3+', engineVersion: '1.9', cssGrade: 'A',
  },
  {
    engine: 'Gecko', browser: 'Camino 1.0', platform: 'OSX.2+', engineVersion: '1.8', cssGrade: 'A',
  },
  {
    engine: 'Gecko', browser: 'Camino 1.5', platform: 'OSX.3+', engineVersion: '1.8', cssGrade: 'A',
  },
  {
    engine: 'Gecko', browser: 'Netscape 7.2', platform: 'Win 95+ / Mac OS 8.6-9.2', engineVersion: '1.7', cssGrade: 'A',
  },
  {
    engine: 'Gecko', browser: 'Netscape Browser 8', platform: 'Win 98SE+', engineVersion: '1.7', cssGrade: 'A',
  },
  {
    engine: 'Gecko', browser: 'Netscape Navigator 9', platform: 'Win 98+ / OSX.2+', engineVersion: '1.8', cssGrade: 'A',
  },
  {
    engine: 'Gecko', browser: 'Mozilla 1.0', platform: 'Win 95+ / OSX.1+', engineVersion: '1', cssGrade: 'A',
  },
  {
    engine: 'Gecko', browser: 'Mozilla 1.1', platform: 'Win 95+ / OSX.1+', engineVersion: '1.1', cssGrade: 'A',
  },
  {
    engine: 'Gecko', browser: 'Mozilla 1.2', platform: 'Win 95+ / OSX.1+', engineVersion: '1.2', cssGrade: 'A',
  },
  {
    engine: 'Gecko', browser: 'Mozilla 1.3', platform: 'Win 95+ / OSX.1+', engineVersion: '1.3', cssGrade: 'A',
  },
  {
    engine: 'Gecko', browser: 'Mozilla 1.4', platform: 'Win 95+ / OSX.1+', engineVersion: '1.4', cssGrade: 'A',
  },
  {
    engine: 'Gecko', browser: 'Mozilla 1.5', platform: 'Win 95+ / OSX.1+', engineVersion: '1.5', cssGrade: 'A',
  },
  {
    engine: 'Gecko', browser: 'Mozilla 1.6', platform: 'Win 95+ / OSX.1+', engineVersion: '1.6', cssGrade: 'A',
  },
  {
    engine: 'Gecko', browser: 'Mozilla 1.7', platform: 'Win 98+ / OSX.1+', engineVersion: '1.7', cssGrade: 'A',
  },
  {
    engine: 'Gecko', browser: 'Mozilla 1.8', platform: 'Win 98+ / OSX.1+', engineVersion: '1.8', cssGrade: 'A',
  },
  {
    engine: 'Gecko', browser: 'Seamonkey 1.1', platform: 'Win 98+ / OSX.2+', engineVersion: '1.8', cssGrade: 'A',
  },
  {
    engine: 'Gecko', browser: 'Epiphany 2.20', platform: 'Gnome', engineVersion: '1.8', cssGrade: 'A',
  },
  {
    engine: 'Webkit', browser: 'Safari 1.2', platform: 'OSX.3', engineVersion: '125.5', cssGrade: 'A',
  },
  {
    engine: 'Webkit', browser: 'Safari 1.3', platform: 'OSX.3', engineVersion: '312.8', cssGrade: 'A',
  },
  {
    engine: 'Webkit', browser: 'Safari 2.0', platform: 'OSX.4+', engineVersion: '419.3', cssGrade: 'A',
  },
  {
    engine: 'Webkit', browser: 'Safari 3.0', platform: 'OSX.4+', engineVersion: '522.1', cssGrade: 'A',
  },
  {
    engine: 'Webkit', browser: 'OmniWeb 5.5', platform: 'OSX.4+', engineVersion: '420', cssGrade: 'A',
  },
  {
    engine: 'Webkit', browser: 'iPod Touch / iPhone', platform: 'iPod', engineVersion: '420.1', cssGrade: 'A',
  },
  {
    engine: 'Webkit', browser: 'S60', platform: 'S60', engineVersion: '413', cssGrade: 'A',
  },
  {
    engine: 'Presto', browser: 'Opera 7.0', platform: 'Win 95+ / OSX.1+', engineVersion: '-', cssGrade: 'A',
  },
  {
    engine: 'Presto', browser: 'Opera 7.5', platform: 'Win 95+ / OSX.2+', engineVersion: '-', cssGrade: 'A',
  },
  {
    engine: 'Presto', browser: 'Opera 8.0', platform: 'Win 95+ / OSX.2+', engineVersion: '-', cssGrade: 'A',
  },
  {
    engine: 'Presto', browser: 'Opera 8.5', platform: 'Win 95+ / OSX.2+', engineVersion: '-', cssGrade: 'A',
  },
  {
    engine: 'Presto', browser: 'Opera 9.0', platform: 'Win 95+ / OSX.3+', engineVersion: '-', cssGrade: 'A',
  },
  {
    engine: 'Presto', browser: 'Opera 9.2', platform: 'Win 88+ / OSX.3+', engineVersion: '-', cssGrade: 'A',
  },
  {
    engine: 'Presto', browser: 'Opera 9.5', platform: 'Win 88+ / OSX.3+', engineVersion: '-', cssGrade: 'A',
  },
  {
    engine: 'Presto', browser: 'Opera for Wii', platform: 'Wii', engineVersion: '-', cssGrade: 'A',
  },
  {
    engine: 'Presto', browser: 'Nokia N800', platform: 'N800', engineVersion: '-', cssGrade: 'A',
  },
  {
    engine: 'Presto', browser: 'Nintendo DS browser', platform: 'Nintendo DS', engineVersion: '8.5', cssGrade: 'C/A<sup>1</sup>',
  },
  {
    engine: 'KHTML', browser: 'Konqureror 3.1', platform: 'KDE 3.1', engineVersion: '3.1', cssGrade: 'C',
  },
  {
    engine: 'KHTML', browser: 'Konqureror 3.3', platform: 'KDE 3.3', engineVersion: '3.3', cssGrade: 'A',
  },
  {
    engine: 'KHTML', browser: 'Konqureror 3.5', platform: 'KDE 3.5', engineVersion: '3.5', cssGrade: 'A',
  },
  {
    engine: 'Tasman', browser: 'Internet Explorer 4.5', platform: 'Mac OS 8-9', engineVersion: '-', cssGrade: 'X',
  },
  {
    engine: 'Tasman', browser: 'Internet Explorer 5.1', platform: 'Mac OS 7.6-9', engineVersion: '1', cssGrade: 'C',
  },
  {
    engine: 'Tasman', browser: 'Internet Explorer 5.2', platform: 'Mac OS 8-X', engineVersion: '1', cssGrade: 'C',
  },
  {
    engine: 'Misc', browser: 'NetFront 3.1', platform: 'Embedded devices', engineVersion: '-', cssGrade: 'C',
  },
  {
    engine: 'Misc', browser: 'NetFront 3.4', platform: 'Embedded devices', engineVersion: '-', cssGrade: 'A',
  },
  {
    engine: 'Misc', browser: 'Dillo 0.8', platform: 'Embedded devices', engineVersion: '-', cssGrade: 'X',
  },
  {
    engine: 'Misc', browser: 'Links', platform: 'Text only', engineVersion: '-', cssGrade: 'X',
  },
  {
    engine: 'Misc', browser: 'Lynx', platform: 'Text only', engineVersion: '-', cssGrade: 'X',
  },
  {
    engine: 'Misc', browser: 'IE Mobile', platform: 'Windows Mobile 6', engineVersion: '-', cssGrade: 'C',
  },
  {
    engine: 'Misc', browser: 'PSP browser', platform: 'PSP', engineVersion: '-', cssGrade: 'C',
  },
  {
    engine: 'Other browsers', browser: 'All others', platform: '-', engineVersion: '-', cssGrade: 'U',
  },
];

export default data;

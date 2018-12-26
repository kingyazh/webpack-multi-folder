var path = require('path');
var moduleExports = {};

// 源文件目录
moduleExports.staticRootDir = path.resolve(__dirname, '../../'); // 项目根目录
moduleExports.srcRootDir = path.resolve(moduleExports.staticRootDir, './src'); // 项目业务代码根目录
moduleExports.pagesDir = path.resolve(moduleExports.srcRootDir, './pages'); // 存放各个页面独有的部分，如入口文件、只有该页面使用到的css、模板文件等
// moduleExports.folderName = path.resolve(moduleExports.srcRootDir, './folderName');
moduleExports.folderOne = path.resolve(moduleExports.srcRootDir, './one');
moduleExports.folderTwo = path.resolve(moduleExports.srcRootDir, './two');
moduleExports.folderThree = path.resolve(moduleExports.srcRootDir, './three');
moduleExports.folderFour = path.resolve(moduleExports.srcRootDir, './four');


// 生成文件目录
moduleExports.buildDir = path.resolve(moduleExports.staticRootDir, './build'); // 存放编译后生成的所有代码、资源（图片、字体等，只是简单的从源目录迁移过来）

module.exports = moduleExports;

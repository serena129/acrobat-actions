///////////////////////////////////////////////////////////////////////
//  Copyright 2020,2022 by Chun Tian <binghe.lisp@gmail.com>
//
//  The code in this file is provided as a download tool
//  for paying members of pdfscripting.com. It is intended
//  to be used as both a working tool and as a learning
//  example.
//
//  By using this tool you agree to the following terms.
//  1.  You will not modify or remove this usage agreement
//  2.  You will not resell or distribute this tool for
//      profit.
//
//  You may:
//  1. Use this tool on your own computers for any purpose you
//     desire, as long as you are the person doing it.
//  2. Examine and modify this script for your own purposes.
//  3. Use it as an example for building your own Automation
//     tools.  Which because they are your own, may be distributed
//     for commercial use.
//
//////////////////////////////////////////////
//
//  ** GENERAL INSTALLATION INSTRUCTIONS:
//
//  This Acrobat Automation Script will only work when
//  placed in one of the Acrobat JavaScript Folders. Execute
//  the following code from the Acrobat JavaScript Console to find
//  the location of the JavaScript folders.
//
//  To display the Acrobat JavaScript Console use Ctrl+J on
//  Windows and Command+J on the Mac
//
//      app.getPath("user","javascript");
//
//      app.getPath("app","javascript");
//
//  On Windows, the application JavaScript folder is usually located at:
//
//  C:\Program Files\Adobe\Acrobat 8.0\Acrobat\JavaScripts
//
//  On Mac, the application JavaScript folder is in a configuration file
//  inside the Acrobat Application Package.
//
//  The script file can be placed in either the "user" or "app" JavaScript
//  folder.
//
//  This script will place a toolbar button on the "Add-ons" toolbar
//  in Acrobat or Adobe Reader. If this toolbar is not visible then
//  Right click on an empty part of the Acrobat toolbar area and select
//  "Add-ons".
//
//  JavaScript toolbar buttons were added to Acrobat in version 6. However,
//  most automation scripts are intended to be used with Acrobat 7 or later.
//  This particular script may contain functionality that prevents it from
//  being used in Adobe Reader.  See comments in the JavaScript File for details.
//

var strDataHighlightRed = // 20x20
"FFC2C2C2FF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6F" + "FF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFFC2C2C2" +
"FF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6F" + "FF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FC8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000" + "C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000FF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FC8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000" + "C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000FF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FC8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000" + "C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000FF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FC8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000" + "C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000FF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FC8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000" + "C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000FF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FC8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000" + "C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000FF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FC8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000" + "C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000FF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FC8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000" + "C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000FF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FC8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000" + "C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000FF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FC8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000" + "C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000FF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FC8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000" + "C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000FF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FC8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000" + "C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000FF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FC8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000" + "C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000FF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FC8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000" + "C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000FF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FC8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000" + "C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000FF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FC8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000" + "C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000C8FF0000FF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6F" + "FF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6F" +
"FFC2C2C2FF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6F" + "FF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFFC2C2C2";

var strDataHighlightYellow = // 20x20
"FFC2C2C2FF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6F" + "FF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFFC2C2C2" +
"FF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6F" + "FF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FFFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00" + "FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FFFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00" + "FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FFFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00" + "FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FFFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00" + "FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FFFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00" + "FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FFFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00" + "FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FFFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00" + "FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FFFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00" + "FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FFFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00" + "FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FFFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00" + "FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FFFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00" + "FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FFFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00" + "FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FFFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00" + "FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FFFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00" + "FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FFFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00" + "FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FFFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00" + "FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6F" + "FF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6F" +
"FFC2C2C2FF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6F" + "FF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFFC2C2C2";

var strDataHighlightBlue = // 20x20
"FFC2C2C2FF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6F" + "FF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFFC2C2C2" +
"FF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6F" + "FF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFF" + "FF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFF" + "FF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFF" + "FF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFF" + "FF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFF" + "FF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFF" + "FF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFF" + "FF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFF" + "FF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFF" + "FF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFF" + "FF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFF" + "FF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFF" + "FF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFF" + "FF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFF" + "FF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFF" + "FF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFF" + "FF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF00FFFFFF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6F" + "FF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6F" +
"FFC2C2C2FF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6F" + "FF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFFC2C2C2";

var strDataHighlightGreen = // 20x20
"FFC2C2C2FF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6F" + "FF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFFC2C2C2" +
"FF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6F" + "FF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FFF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00" + "FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FFF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00" + "FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FFF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00" + "FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FFF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00" + "FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FFF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00" + "FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FFF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00" + "FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FFF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00" + "FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FFF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00" + "FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FFF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00" + "FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FFF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00" + "FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FFF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00" + "FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FFF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00" + "FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FFF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00" + "FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FFF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00" + "FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FFF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00" + "FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FFF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00" + "FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF00FF6F6F6FFF6F6F6F" +
"FF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6F" + "FF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6F" +
"FFC2C2C2FF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6F" + "FF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFF6F6F6FFFC2C2C2";

// Icon Generic Stream Object
var oIconHighlightRed =
    {count: 0, width: 20, height: 20,
     read: function(nBytes) {
         return strDataHighlightRed.slice(this.count, this.count += nBytes);
     }};
var oIconHighlightYellow =
    {count: 0, width: 20, height: 20,
     read: function(nBytes) {
         return strDataHighlightYellow.slice(this.count, this.count += nBytes);
     }};
var oIconHighlightBlue =
    {count: 0, width: 20, height: 20,
     read: function(nBytes) {
         return strDataHighlightBlue.slice(this.count, this.count += nBytes);
     }};
var oIconHighlightGreen =
    {count: 0, width: 20, height: 20,
     read: function(nBytes) {
         return strDataHighlightGreen.slice(this.count, this.count += nBytes);
     }};

var DoCmdhighlight = app.trustedFunction(function(oDoc, c)
{
    var strokeColor = c;
    var opacity = 0.8;

    oDoc.syncAnnotScan();
    var annots = this.selectedAnnots;

    if (annots != null) {
      for (var i = annots.length - 1; i >= 0; i--) {
          annots[i].opacity = opacity;
          annots[i].strokeColor = strokeColor;
      }
    }
});

var oButObjHighlightRed =
    {cName: "highlightRed",
     oIcon: oIconHighlightRed,
     cExec: "DoCmdhighlight(event.target, color.red);",
     cEnable: "event.rc = (app.doc != null)",
     cMarked: "event.rc = false",
     cTooltext: "Red Highlight - Criticism",
     cLabel: "Red Highlight"};

var oButObjHighlightYellow =
    {cName: "highlightYellow",
     oIcon: oIconHighlightYellow,
     cExec: "DoCmdhighlight(event.target, color.yellow);",
     cEnable: "event.rc = (app.doc != null)",
     cMarked: "event.rc = false",
     cTooltext: "Yellow Highlight - Emphasis",
     cLabel: "Yellow Highlight"};

var oButObjHighlightBlue =
    {cName: "highlightBlue",
     oIcon: oIconHighlightBlue,
     cExec: "DoCmdhighlight(event.target, color.cyan);",
     cEnable: "event.rc = (app.doc != null)",
     cMarked: "event.rc = false",
     cTooltext: "Blue Highlight - Aphorism",
     cLabel: "Blue Highlight"};

var oButObjHighlightGreen =
    {cName: "highlightGreen",
     oIcon: oIconHighlightGreen,
     cExec: "DoCmdhighlight(event.target, color.green);",
     cEnable: "event.rc = (app.doc != null)",
     cMarked: "event.rc = false",
     cTooltext: "Green Highlight - Keywords",
     cLabel:    "Green Highlight"};

// remove old toolbar buttons of the same names (if exist)
try{app.removeToolButton("highlightRed");}catch(e){}
try{app.removeToolButton("highlightYellow");}catch(e){}
try{app.removeToolButton("highlightBlue");}catch(e){}
try{app.removeToolButton("highlightGreen");}catch(e){}

// add new toolbar buttons
try {
    app.addToolButton(oButObjHighlightRed);
    app.addToolButton(oButObjHighlightYellow);
    app.addToolButton(oButObjHighlightBlue);
    app.addToolButton(oButObjHighlightGreen);
} catch(e) {
    console.println("Highlights: addToolButton failed.");
  // print something?
}

try {
  app.addMenuItem({
    cName: "AboutHighlights",
    cUser: "Highlights (JavaScript)...",
    cParent: "AboutExtensions", // this always exists
    cMarked: "event.rc = false",
    cEnable: "true",
    nPos: 0,
    bPrepend: "false",
    cExec: "app.alert(\"Highlights 2.1 by Chun Tian <binghe.lisp@gmail.com>\", 3);"
  });
} catch(e) {
    console.println("Highlights: addMenuItem failed.");
}

// Version 2.1
// Last Update: July 14, 2022

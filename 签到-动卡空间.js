auto()

动卡空间()

function 动卡空间() {
    toastLog("动卡空间签到")
    app.launchApp("动卡空间")
    sleep(6000);

    // go主页();
    自动签到();
    exit();
//     大转盘()
}



function 自动签到() {
    click(100,184)
    sleep(1000)
    click(840,1440)
    sleep(1000)
    click(560,2190)
    sleep(1000)
    click(600,2060)
    sleep(1000)
    click(600,700)
    sleep(1000)
    click(150,2250)
    click(100,2100)
    click(860,2010)
    click(800,1840)
    click(220,1970)
    click(110,1970)
    click(100,2050)
    click(330,1970)
    click(840,1980)
    click(840,1980)
    click(755,1970)
    click(160,2250)
    click(220,1840)
    click(540,1840)
    click(880,1840)
    sleep(1000)
    click(560,1020)
    sleep(10000)
    // click(560,2020)
    text("去签到").click()
    // id()
    sleep(5000);
    killApp("动卡空间")
    sleep(4000);
    app.sendBroadcast("android.intent.action.tasker.dkkj.ok");
    exit();

    // btn1 = className("android.widget.Image").text("851a06d4-5aec-4906-b48d-7b895c6cd9d8")
    //     .findOne().parent()
    // btn1.click()

    // 签到按钮 = className("android.widget.Button").textEndsWith("签到")
    // 签到按钮.waitFor()
    // 签到按钮.findOne().click()
    // sleep(1000);
    // if (className("android.widget.TextView").text("知道了").exists()){
    //     className("android.widget.TextView").text("知道了").findOne().click()
    //     toastLog("签到成功")
    // }
    // else {
    //     toastLog("今天已签到")
    // }
    // toastLog(back())
}

function killApp(appName) {
    let forcedStopStr = ["结束", "停", "强"];
    let packageName = app.getPackageName(appName);//获取应用包名 通过软件名
    if (packageName) {
        app.openAppSetting(packageName);//进入应用设置信息
        text(appName).waitFor();//等待查询到名字出现
        for (var i = 0; i < forcedStopStr.length; i++) {
            if (textContains(forcedStopStr[i]).exists()) {//判定关键字是否存在
                sleep(500);
                let forcedStop = textContains(forcedStopStr[i]).findOne();
                if (forcedStop.enabled()) {
                    text("结束运行").waitFor();
                    //这里的结束运行不能被点击,我用控件中心点来点击
                    var 结束运行 = text("结束运行").findOne().bounds();
                    click(结束运行.centerX(), 结束运行.centerY());
                    sleep(500);
                    forcedStop.click();
                    text("确定").findOne().click();
                    sleep(1000);
                    home();
                    break;
                }
            }
        }
    }
}

function go主页() {
    maxt = 5;
    while(!is主页() && maxt-- > 0)
    {
        back();
        sleep(3000);
    }
    if (is主页()) {
        toastLog("到主页了")
    } else {
        toastLog("找不到主页了")
    }
}

function is主页() {
    if (text("精选").exists() && text("生活").exists() && text("金融").exists() && text("我的").exists())
        return true;
    return false;
}



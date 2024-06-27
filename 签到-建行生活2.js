auto()

建行生活()

function 建行生活() {
    toastLog("建行签到")
    app.launchApp("建行生活")
    sleep(6000);
// //周五领
    go主页();
    自动签到();
    exit();
//     大转盘()

}

function 大转盘() {
    className("android.widget.TextView").text("我的").findOne().click()
    sleep(5000)
    bt1 = className("android.widget.Image").text("42419f73-512a-4f12-8c73-1d574efec656")
    sleep(2000)
    if (bt1.exists()) {
        bt1.findOne().click()
        sleep(2000)
        className("android.widget.TextView").depth(12).findOne().click()
        sleep(2000)
        // click(90, 932, 990, 1832)
        b1 = className("android.widget.Image").clickable(true).depth(14).findOne().bounds()
        click(b1.centerX(), b1.centerY())
        toastLog(back())
        toastLog("找到转盘")
    } else {
        toastLog("找不到转盘")
    }
    // className("android.view.View").scrollable(true).depth(14).findOne().click()
}


function 自动签到() {
    btn1 = className("android.widget.Image").text("851a06d4-5aec-4906-b48d-7b895c6cd9d8")
        .findOne().parent()
    btn1.click()

    签到按钮 = className("android.widget.Button").textEndsWith("签到")
    签到按钮.waitFor()
    签到按钮.findOne().click()
    sleep(1000);
    if (className("android.widget.TextView").text("知道了").exists()){
        className("android.widget.TextView").text("知道了").findOne().click()
        toastLog("签到成功")
    }
    else {
        toastLog("今天已签到")
    }
    toastLog(back())
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



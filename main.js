auto();

// toastLog(text("去完成").find().size())

// toastLog(className("android.widget.TextView").find().size())


text("查看更多").findOne().click()
sleep(2000)
toastLog(text("去完成").find().size())
dfs

var 去完成 = text("去完成").find();
for (var i = 0; i < 去完成.length; i++) {
    var tv = 去完成[i]
    if (text("任务中心").exists() && text("我的奖品").exists()) {
        toastLog("进来了")
        tv.click();
        sleep(1000);
        if (text("关注按钮").exists() && text("点击购买").exists()) {
            text("关注按钮").findOne().click()
            toastLog("来关注了")
        } else if (desc("继续浏览").exists()) {
            toastLog("来浏览了")
            desc("继续浏览")
            sleep(10000);
        } else {
            toastLog("啥也没干了")
        }
        sleep(10000);
        back();
        toastLog("首页:" + text("首页").exists())
        if (text("首页").exists())
        desc("任务中心").findOne().click();
    } else {
        toastLog("出去了")
    }
}
// text("去完成").find().forEach(function (tv) { 
//     tv.click();
//     sleep(1000);
//     toastLog(text("关注按钮").exists())
//     toastLog(text("点击购买").exists())
//     if (text("关注按钮").exists() && text("点击购买").exists()) {
//         text("关注按钮").findOne().click()
//     } else if (text("继续浏览").exists()) {
//         sleep(10000);
//     }

//     sleep(2000);
//     back();
// })


// className("android.widget.TextView").text("查看更多").findOne().click()

// toastLog(b1.centerX)
// click(b1.centerX(), b1.centerY())

// go();

function go() {
    toastLog("开始")
    app.launchApp("中国工商银行")
    sleep(5000)

desc("任务中心").findOne().click();

text(" 签到有礼").findOne().click()
back();

}
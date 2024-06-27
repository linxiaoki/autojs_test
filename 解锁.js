
auto(); // 自动打开无障碍服务
 
/*判断屏幕锁定，解锁屏幕（数字密码）*/
swipe(500, 1800, 500, 1000, 300);
home()
 
if (!device.isScreenOn()) {//息屏状态将屏幕唤醒
    device.wakeUp();//唤醒设备
 
    sleep(1000); // 等待屏幕亮起
 
    //miui锁屏滑动不能唤出密码输入 通过下拉通知栏点击时间进入密码解锁
 
    swipe(500, 1800, 500, 1000, 300);
 
    sleep(1000);

    //点击时间
 
    // click(100, 120);

    gesture(600,[250,1200], [850,1200], [850,1800]);
 
    //解锁 密码0401
 
    // desc(0).findOne().click();
 
    // desc(4).findOne().click();
 
    // desc(0).findOne().click();
 
    // desc(1).findOne().click();
 
    //等待解锁完成，返回并退出
 
    // back();
}
sleep(1000);
home();
exit();   
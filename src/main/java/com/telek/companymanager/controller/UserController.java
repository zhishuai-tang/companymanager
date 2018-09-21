package com.telek.companymanager.controller;

import com.telek.companymanager.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    /**
     * 获取用户清单
     * 如果不传 username 参数或者 username 参数为空字符串，则 username 参数不起作用
     * 如果不传 telephone 参数或者 telephone 参数为空字符串，则 telephone 参数不起作用
     * @param pageNum  当前页码
     * @param pageSize 每页条数
     * @param username 员工姓名，可以不传或者为空字符串，默认为空字符串
     * @param telephone 员工手机号，可以不传或者为空字符串，默认为空字符串
     * @return 符合条件的分页结果集 转换成json 返回给前台
     */
    @PostMapping("/getUsers")
    public Object getUsers(@RequestParam(name = "pageNum", required = false, defaultValue = "1") int pageNum, @RequestParam("pageSize") int pageSize, @RequestParam(name = "username[]", required = false, defaultValue = "") String[] username, @RequestParam(name = "telephone", required = false, defaultValue = "") String telephone) {
        return userService.getUsers(pageNum, pageSize, username.length > 0 ? username[0] : "", telephone);
    }
}

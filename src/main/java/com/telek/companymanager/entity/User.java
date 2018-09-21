package com.telek.companymanager.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Past;
import java.util.Date;

@Getter
@Setter
public class User {
    /**
     * 用户ID
     */
    @NotNull
    private int id;
    /**
     * 工号
     */
    private int jobNum;
    /**
     * 员工姓名
     */
    @NotNull
    private String username;
    /**
     * 密码
     */
    @NotNull
    private String password;
    /**
     * 员工手机号码
     */
    private String telephone;
    /**
     * 入职日期
     */
    @NotNull
    @JsonFormat(timezone = "GMT+8", pattern = "yyyy-MM-dd")
    private Date entryDate;
    /**
     * 住址
     */
    private String address;
    /**
     * 性别，0为女，1为男
     */
    @NotNull
    private int gender;
    /**
     * 生日
     */
    @Past
    @JsonFormat(timezone = "GMT+8", pattern = "yyyy-MM-dd")
    private Date birthday;
}

<template>
  <div class="container">
    <div class="picture">
      <img
        src="../../../../public/userphoto.png"
        width="200px"
        height="200px"
      />
    </div>
    <div class="info">
      <div class="name">
        {{ userinfo.username }}
      </div>
      <div class="phone">
        <i class="el-icon-phone-outline"></i>
        <span>{{ userinfo.tel }}</span>
      </div>
      <div class="form">
        <span>用户名:</span>
        <input v-model="userinfo.username" />
        <br />
        <span>学校:</span>
        <input v-model="userinfo.school" />
        <br />
        <span v-if="this.$store.getters.user.user_type != 3">专业:</span>
        <el-select
          v-model="userinfo.major"
          placeholder="请选择专业"
          v-if="this.$store.getters.user.user_type == 1"
        >
          <el-option
            v-for="item1 in userinfo.majorname"
            :key="item1"
            :label="item1"
            :value="item1"
          >
          </el-option>
        </el-select>

        <span v-if="this.$store.getters.user.user_type == 2">{{
          userinfo.major
        }}</span>

        <el-button
          class="cbutton"
          v-if="changepwd === 0"
          icon="el-icon-arrow-right"
          @click="cpwdControl()"
          >修改密码</el-button
        >
        <el-button
          class="cbutton"
          v-if="changepwd === 1"
          icon="el-icon-arrow-down"
          @click="cpwdControl()"
          >修改密码</el-button
        >
        <div v-if="changepwd === 1">
          <span>旧密码:</span>
          <input v-model="userinfo.oldpwd" type="password" />
          <br />
          <span>新密码:</span>
          <input v-model="userinfo.newpwd" type="password" />
        </div>
      </div>
      <div class="button">
        <button @click="save(userinfo)">保存</button>
      </div>
    </div>
  </div>
</template>

<script>
import { saveInfo, getInfo, updatePassword } from "@/api/user";
import { getMajorInfo } from "@/api/query";
export default {
  data() {
    return {
      userinfo: {
        user_id: "",
        username: "",
        major: "",
        tel: "",
        school: "",
        majorid: [],
        majorname: [],
        oldpwd: "",
        newpwd: "",
      },
      changepwd: 0,
    };
  },
  methods: {
    save(userinfo) {
      console.log(userinfo.school);
      var i = 0;
      for (i = 0; userinfo.majorname[i] != userinfo.major; i++) {}
      console.log(userinfo.major);
      saveInfo(
        {
          major_id: userinfo.majorid[i],
          school: userinfo.school,
          user_name: userinfo.username,
        },
        this.userinfo.user_id
      )
        .then((r) => {
          if (r.header.code === -1) {
            this.$message.error(r.header.message);
            return;
          } else {
            this.$message("您已成功保存！");
          }
        })
        .catch((err) => {
          console.log(err);
        });
      if (this.userinfo.newpwd) {
        updatePassword(this.userinfo.user_id, {
          old_password: this.userinfo.oldpwd,
          new_password: this.userinfo.newpwd,
        })
          .then((r) => {
            if (r.code === 0) {
              this.$message(r.message);
              this.changepwd = 0;
            } else {
              this.$message.error(r.message);
            }
          })
          .catch((err) => {
            console.log(err);
          });
        this.userinfo.newpwd = "";
        this.userinfo.oldpwd = "";
      }
    },
    cpwdControl() {
      if (this.changepwd === 0) {
        this.changepwd = 1;
      } else {
        this.changepwd = 0;
      }
    },
  },
  mounted() {},
  created() {
    this.userinfo.user_id = this.$store.getters.user.user_id;
    getInfo(this.userinfo.user_id)
      .then((r) => {
        if (r.header.code === -1) {
          this.$message.error(r.header.message);
          return;
        } else {
          console.log(r);
          this.userinfo.username = r.personalInformation.user_name;
          this.userinfo.school = r.personalInformation.school;
          this.userinfo.major = r.personalInformation.major_name;
          this.userinfo.tel = r.personalInformation.phone_number;
        }
      })
      .catch((err) => {
        console.log(err);
      });
    getMajorInfo()
      .then((r) => {
        if (r.header.code === 0) {
          this.userinfo.majorname = r.data.nameList;
          this.userinfo.majorid = r.data.idList;
        } else {
          this.$message.error(r.header.message);
          return;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>



<style scoped lang="scss">
img {
  border-radius: 50%;
  margin: 50px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.container {
  display: flex;
  width: 100%;
  height: calc(100vh - 80px);
  background: linear-gradient(120deg, #e8efff, #f3e8f0, #f4eaea);
  /* 阴影效果 不好意思我感觉丑丑的*/
  // box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  align-items: center;
  .picture {
    width: 30%;
    display: flex;
    justify-content: center;
    transition: 1s;
    img {
      border: #fff solid 10px;
    }
  }
  .picture:hover {
    transform: scale(1.1);
  }
  .info {
    background: rgba(255, 255, 255, 0.7);
    padding: 30px;
    border-radius: 20px;
    width: 40%;
    .name {
      font-size: 32px;
      margin-left: 10px;
      color: #d89f9f;
      font-weight: 600;
      letter-spacing: 1px;
      transition: 1s;
    }
    .name:hover {
      transform: rotate(2deg);
    }
    .phone {
      font-size: 16px;
      padding: 5px;
      color: #8585c7;
      transition: 2s;
      i {
        display: inline-block;
        padding: 3px;
      }
    }
    .phone:hover {
      transform: rotate(-3deg);
    }
    .form {
      // background: #ffaa7f;
      padding: 10px;
      span {
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 1px;
        color: #d89f9f;
        margin-right: 10px;
      }
      input {
        color: #908eb4;
        width: 80%;
        border: 1px solid #ffffff;
        border-radius: 4px;
        height: 28px;
        font-size: 16px;
        margin: 6px 0;
        letter-spacing: 1px;
        transition: 1s;
      }
      input:focus {
        color: #d89f9f;
        font-size: 17px;
        letter-spacing: 2px;
      }
    }
    .cbutton {
      background: rgba(255, 255, 255, 0);
      display: flex;
      justify-content: left;
      border: none;
      width: auto;
      height: auto;
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 1px;
      color: #d89f9f;
      margin-left: -5px;
      margin-top: 10px;
    }
    .button {
      display: flex;
      justify-content: center;
      button {
        width: 30%;
        margin-top: 20px;
        outline: none;
        border: none;
        background: #d89f9f;
        border-radius: 8px;
        padding: 13px;
        font-size: 18px;
        letter-spacing: 2px;
        color: #fff;
        transition: 1s;
      }
      button:hover {
        background: #f2b1a4;
      }
    }
  }
}
</style>

<!--
 * @Autor: huasenjio
 * @Date: 2021-11-27 22:38:22
 * @LastEditors: huasenjio
 * @LastEditTime: 2022-09-21 23:36:59
 * @Description: 登陆面板
-->
<template>
  <HsDialog :title="'登陆注册'" :fullscreen="true" :visible.sync="showWrapSign" @close="closeSignPanel" @closeDialog="closeSignPanel">
    <div class="sign shadow-md rounded-lg">
      <div class="banner">
        <img src="~@/assets/img/sign/default.svg" />
      </div>
      <div class="tab">
        <ul>
          <li :class="{ active: activeIndex == 0 }" @click="activeIndex = 0">
            登陆
          </li>
          <li :class="{ active: activeIndex == 1 }" @click="activeIndex = 1">
            注册 · 找回
          </li>
        </ul>
        <div class="content">
          <!-- 登陆 -->
          <span class="panel" v-show="0 == activeIndex">
            <section class="login">
              <el-form :model="submitForm" :rules="rules" ref="loginForm" status-icon>
                <el-form-item prop="id">
                  <el-input v-model="submitForm.id" placeholder="请输入邮箱"> </el-input>
                </el-form-item>
                <el-form-item prop="password">
                  <el-input type="password" v-model="submitForm.password" :show-password="true" autocomplete="off" placeholder="请输入密码"></el-input>
                </el-form-item>
              </el-form>
              <div class="btn" @click="login">
                登 陆
              </div>
            </section>
          </span>
          <!-- 注册 -->
          <span class="panel" v-show="1 == activeIndex">
            <section class="register">
              <el-form :model="submitForm" :rules="rules" ref="registerForm" status-icon>
                <el-form-item prop="id">
                  <el-input v-model="submitForm.id" placeholder="请输入邮箱"> </el-input>
                </el-form-item>
                <el-form-item prop="password">
                  <el-input type="password" v-model="submitForm.password" :show-password="true" autocomplete="off" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item prop="mailCode">
                  <div class="mail-code-group">
                    <div class="code">
                      <el-input v-model="submitForm.mailCode" placeholder="请输入邮箱验证码"> </el-input>
                    </div>
                    <div class="send" ref="codeButtom" @click="sendMailCode">点击发送</div>
                  </div>
                </el-form-item>
                <el-form-item>
                  <div class="tips">
                    tips：忘记密码？再次注册即可自动更新密码！
                  </div>
                </el-form-item>
              </el-form>
              <div class="btn" @click="register">
                注 册 · 找 回
              </div>
            </section>
          </span>
        </div>
      </div>
    </div>
  </HsDialog>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
import { checkId, checkPassword, checkMailCode } from 'plugin/rules.js';
import HsDialog from '@/components/content/dialog/Dialog.vue';
export default {
  name: 'WrapSign',
  components: { HsDialog },
  data() {
    return {
      // 提交数据
      submitForm: {
        id: '',
        password: '',
        mailCode: '',
      },

      // 校验的规则
      rules: {
        id: [{ validator: checkId, trigger: 'blur' }],
        password: [{ validator: checkPassword, trigger: 'blur' }],
        mailCode: [{ validator: checkMailCode, trigger: 'blur' }],
      },

      // 状态变量
      activeIndex: 0,
      count: 60, // 倒计时秒数
      timer: null, // 定时器
      timerSwitch: true, // 可用开关
    };
  },
  computed: {
    showWrapSign: {
      get() {
        return this.$store.state.showWrapSign;
      },
      set(value) {
        this.commitAll({
          showWrapSign: value,
        });
      },
    },
  },
  methods: {
    ...mapMutations(['commitAll']),

    // 关闭登陆面板
    closeSignPanel() {
      this.commitAll({
        showWrapSign: false,
      });
    },

    // 发送邮箱验证码
    sendMailCode() {
      if (!this.timerSwitch == true) {
        this.$notify({
          title: '警告',
          message: '请耐心等待验证码',
          type: 'warning',
          position: 'top-right',
          duration: 2000,
        });
        return;
      }
      this.API.getMailCode();
      // 无论是否发送成功均打开定时器
      this.timer = setInterval(() => {
        if (this.count >= 0) {
          this.$refs.codeButtom.innerText = --this.count; // 倒秒效果
        } else {
          clearInterval(this.timer); // 达到秒速停止定时器
          // 修改定时器初始参数
          this.count = 60;
          this.timerSwitch = true;
          this.$refs.codeButtom.innerText = '点击发送';
        }
      }, 1000);
      // 设置定时器为不可用
      this.timerSwitch = false;
    },

    // 登陆处理
    login() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          let params = {
            id: this.submitForm.id,
            password: this.submitForm.password,
          };
          this.API.login(params)
            .then(res => {
              // 用户数据本地持久化
              this.STORAGE.setItem(this.CONSTANT.localUser, res.data);
              // 调用更新本地数据
              this.$store.dispatch('initLocalUserInfo');
            })
            .catch(err => {
              this.$notify({
                title: '警告',
                message: '登陆失败',
                type: 'warning',
                position: 'top-right',
                duration: 2000,
              });
            });
          // 关闭登陆面板
          this.commitAll({
            showWrapSign: false,
          });
          this.$store.dispatch('initLocalUserInfo');
          this.$store.dispatch('initLocalStyleInfo');
        } else {
          return false;
        }
      });
    },

    // 注册 & 找回密码
    register() {
      this.$refs.registerForm.validate(valid => {
        if (valid) {
          let params = {
            id: this.submitForm.id,
            password: this.submitForm.password,
            mailCode: this.submitForm.mailCode,
          };
          this.API.register(params).then(res => {
            this.activeIndex = 0;
          });
        } else {
          return false;
        }
      });
    },
  },

  destroyed() {
    clearInterval(this.timer); // 防止页面刷新之后定时任务仍在继续
  },
};
</script>

<style lang="scss" scoped>
.sign {
  width: 350px;
  padding: 20px 20px 0 20px;
  margin: 0 auto;
  border: 1px solid var(--gray-100);
  box-sizing: border-box;
  .banner {
    img {
      width: 100%;
    }
  }
  .tab {
    ul {
      display: flex;
      justify-content: space-around;
      li {
        width: 50%;
        padding: 10px 0;
        text-align: center;
        border-bottom: 3px solid var(--gray-0);
        cursor: pointer;
      }
      .active {
        border-bottom: 3px solid var(--red-500);
      }
    }
    .content {
      .panel {
        padding: 20px 10px;
        box-sizing: border-box;
        .register {
          .mail-code-group {
            display: flex;
            align-items: center;
            .code {
              width: calc(100% - 80px - 16px);
            }
            .send {
              width: 80px;
              margin-left: 16px;
              display: flex;
              justify-content: center;
              align-items: center;
              border-bottom: 3px solid var(--red-500);
              cursor: pointer;
            }
          }
        }
      }
      .btn {
        border-radius: 28px;
        margin: 32px 0px 10px 0px;
        padding: 10px 5px;
        text-align: center;
        color: var(--gray-0);
        background-color: var(--red-500);
        box-sizing: border-box;
        cursor: pointer;
      }
      ::v-deep .el-form {
        .el-form-item__content {
          input {
            border-radius: 0;
            border: none;
            padding: 0;
            border-bottom: 1px solid var(--gray-400);
          }
        }
      }
    }
  }
}
</style>

<template>
  <div v-show="visible">
    <ul v-if="isGuide" class="fixed-handle">
      <li :class="currentIndex === 0 ? 'active-tab-handle': ''" @click="tabHandle(0)">
        <a href="#" class="flex-column">
          <svg class="icon" width="18" height="22" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M768 64a32 32 0 0 1 32 31.68V192h64c17.664 0 32 14.208 32 32v32H128V127.936C128 92.608 156.736 64 191.68 64H768z m-32 64H223.776A31.904 31.904 0 0 0 192 160c0 17.792 14.24 32 31.776 32H736v-64zM128 256h768v640.288c0 35.2-28.704 63.712-64.16 63.712H192.16A63.904 63.904 0 0 1 128 896.288V256z m64 0v608.256A32 32 0 0 0 223.744 896h576.512A32 32 0 0 0 832 864.256V256H192z m475.52 222.816H317.952c-16.032 0-29.056-14.08-29.056-31.424s13.024-31.36 29.056-31.392h349.504c16.032 0 29.056 14.08 29.056 31.392 0 17.344-13.024 31.424-29.056 31.424z m-153.216 128h-194.24a31.264 31.264 0 0 1-31.136-31.424c0-17.344 13.952-31.392 31.136-31.392h194.208c17.184 0 31.104 14.08 31.104 31.392a31.264 31.264 0 0 1-31.104 31.424h0.032z" />
          </svg>
          <div class="mt5 flex-c">
            <span>新手</span>
            <span>指南</span>
          </div>
        </a>
      </li>
      <li :class="currentIndex === 1 ? 'active-tab-handle': ''" @click="tabHandle(1)">
        <a href="#" class="flex-column">
          <svg t="1581917184718" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2485" width="16" height="16" fill="currentColor">
            <path d="M782.9 535.4c15.1 0 29.1 5.8 39.6 16.3l34.2 34.2c10.5 10.5 16.3 24.5 16.3 39.6s-5.8 29.1-16.3 39.6l-274.1 274-115.6 2.3 2.2-115.7 274.1-274.1c10.5-10.5 24.6-16.2 39.6-16.2m0-64c-30.8 0-61.5 11.7-84.9 35L414.3 790.1c-5.5 5.5-8.6 12.9-8.8 20.6l-3.8 196 195.8-4c7.7-0.2 15.1-3.3 20.6-8.8l283.8-283.8c46.7-46.7 46.7-123 0-169.7l-34.2-34.2c-23.3-23.2-54-34.8-84.8-34.8z" p-id="2486" />
            <path d="M689.9 543.8l-45.2 45.3 166.4 166.3 45.2-45.2-166.4-166.4z" p-id="2487" />
            <path d="M292.4 1024H215c-83.8 0-152-68.2-152-152V152C63 68.2 131.2 0 215 0h530c83.8 0 152 68.2 152 152v198.1c0 17.7-14.3 32-32 32s-32-14.3-32-32V152c0-48.5-39.5-88-88-88H215c-48.5 0-88 39.5-88 88v720c0 48.5 39.5 88 88 88h77.4c17.7 0 32 14.3 32 32s-14.3 32-32 32z" p-id="2488" />
            <path d="M735 319.9H223c-17.6 0-32-14.4-32-32s14.4-32 32-32h512c17.6 0 32 14.4 32 32s-14.4 32-32 32zM543 511.9H223c-17.6 0-32-14.4-32-32s14.4-32 32-32h320c17.6 0 32 14.4 32 32s-14.4 32-32 32zM381.8 703.9H223c-17.6 0-32-14.4-32-32s14.4-32 32-32h158.8c17.6 0 32 14.4 32 32s-14.4 32-32 32z" p-id="2489" />
          </svg>
          <div class="mt5 flex-c">
            <span>数据</span>
            <span>申请</span>
          </div>
        </a>
      </li>
      <li :class="currentIndex === 2 ? 'active-tab-handle': ''" @click="tabHandle(2)">
        <a href="#" class="flex-column">
          <svg t="1582019501746" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15738" width="22" height="22" fill="currentColor">
            <path d="M483.84 888.32H224.256c-14.336 0-26.112-11.776-26.112-26.112V162.816c0-14.336 11.776-26.112 26.112-26.112h576c14.336 0 26.112 11.776 26.112 26.112v424.448c0 14.336-11.776 26.112-26.112 26.112s-26.112-11.776-26.112-26.112V188.928H250.368v647.168H483.84c14.336 0 26.112 11.776 26.112 26.112s-11.776 26.112-26.112 26.112z" p-id="15739" />
            <path d="M655.36 377.856H355.84c-14.336 0-26.112-11.776-26.112-26.112s11.776-26.112 26.112-26.112h299.52c14.336 0 26.112 11.776 26.112 26.112s-11.776 26.112-26.112 26.112zM544.256 504.832H355.84c-14.336 0-26.112-11.776-26.112-26.112s11.776-26.112 26.112-26.112h188.416c14.336 0 26.112 11.776 26.112 26.112s-11.776 26.112-26.112 26.112z m-87.04 130.048H355.84c-14.336 0-26.112-11.776-26.112-26.112s11.776-26.112 26.112-26.112h101.376c14.336 0 26.112 11.776 26.112 26.112s-11.776 26.112-26.112 26.112z m190.976 266.752c-6.656 0-13.312-2.56-18.432-7.68L493.568 757.76c-10.24-10.24-10.24-26.624 0-36.864s26.624-10.24 36.864 0l117.76 117.76 217.6-217.6c10.24-10.24 26.624-10.24 36.864 0s10.24 26.624 0 36.864L666.624 893.952c-5.12 5.12-11.776 7.68-18.432 7.68z" p-id="15740" />
          </svg>
          <div class="mt5 flex-c">
            <span>成果</span>
            <span>提交</span>
          </div>
        </a>
      </li>
      <li :class="currentIndex === 3 ? 'active-tab-handle': ''" @click="tabHandle(3)">
        <a href="#" class="flex-column">
          <svg class="icon" width="20" height="19" viewBox="0 0 1159 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M1088.731 85.857c7.486 15.186-0.014 34.184-16.746 42.433L247.459 534.728c-16.735 8.25-36.37 2.625-43.855-12.56-7.485-15.184 0.013-34.183 16.748-42.432l824.525-406.438c16.734-8.248 36.368-2.626 43.854 12.56zM1067.131 69.833c16.507 3.765 27.377 17.834 24.278 31.421L938.702 770.787c-3.1 13.587-18.995 21.552-35.5 17.786-16.506-3.764-27.374-17.831-24.274-31.42l152.705-669.531c3.098-13.589 18.993-21.553 35.498-17.789zM1059.32 99.368c12.483 11.436 14.63 29.416 4.79 40.156l-484.802 529.24c-9.84 10.742-27.938 10.176-40.422-1.257-12.483-11.437-14.626-29.413-4.786-40.156L1018.9 98.111c9.839-10.741 27.937-10.177 40.42 1.257zM502.153 622.73c-6.02 16.604-24.36 25.185-40.965 19.166l-240.527-87.19c-16.606-6.02-25.187-24.36-19.168-40.965 6.02-16.605 24.36-25.186 40.965-19.167l240.526 87.192c16.606 6.018 25.187 24.36 19.169 40.964zM937.345 775.375c-6.019 16.605-24.36 25.186-40.966 19.167L655.851 707.35c-16.603-6.019-25.185-24.36-19.165-40.964s24.362-25.185 40.964-19.166l240.528 87.19c16.604 6.02 25.184 24.36 19.167 40.965zM585.576 911.117c0 17.662-14.318 31.98-31.98 31.98-17.663 0-31.981-14.318-31.981-31.98V655.275c0-17.662 14.318-31.98 31.98-31.98 17.663 0 31.98 14.318 31.98 31.98v255.842z" />
          </svg>
          <div class="mt5 flex-c">
            <span>数据</span>
            <span>发布</span>
          </div>
        </a>
      </li>
    </ul>
    <ul v-if="!isGuide" class="fixed-handle">
      <li :class="currentItemIndex === 0 ? 'active-tab-handle': ''" @click="tabItemHandle(0)">
        <a href="#" class="flex-column">
          <svg t="1590132898680" class="icon" width="22" height="20" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5405">
            <path fill="currentColor" d="M512 850.368 220.096 538.752c-55.68-59.968-82.432-121.216-79.424-182.208 3.968-78.912 57.216-126.912 59.52-128.896 42.176-35.968 87.232-54.08 134.336-54.08 81.088 0 145.984 53.44 177.408 85.376 31.552-32 96.192-85.376 177.6-85.376 47.104 0 92.16 18.112 134.08 53.76 2.624 2.24 55.808 50.24 59.776 129.152 3.072 60.928-23.68 122.24-79.36 182.144L512 850.368 512 850.368M233.92 266.624c0 0-39.36 36.096-41.792 93.248C190.08 406.272 212.16 454.656 257.792 503.552L512 774.976l254.272-271.424c45.44-49.088 67.712-97.408 65.536-143.68-2.496-57.152-41.792-93.312-42.304-93.632-31.744-27.2-65.536-41.152-100.032-41.152-86.848 0-156.544 87.488-157.248 88.32L511.424 340.032 491.2 312.896C490.944 312.512 421.696 225.152 334.464 225.152 299.968 225.152 266.176 239.104 233.92 266.624L233.92 266.624 233.92 266.624M233.92 266.624 233.92 266.624z" p-id="5406" />
          </svg>
          <div class="mt5 flex-c">
            <span>收藏</span>
          </div>
        </a>
      </li>
      <li :class="currentItemIndex === 1 ? 'active-tab-handle': ''" @click="tabItemHandle(1)">
        <a href="#" class="flex-column">
          <svg t="1590133357166" class="icon" width="22" height="20" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5542">
            <path fill="currentColor" d="M281.535354 387.361616c-31.806061 0-57.664646 26.763636-57.664647 59.733333 0 32.969697 25.858586 59.733333 57.664647 59.733334s57.664646-26.763636 57.664646-59.733334c0-33.09899-25.858586-59.733333-57.664646-59.733333z m230.529292 0c-31.806061 0-57.664646 26.763636-57.664646 59.733333 0 32.969697 25.729293 59.733333 57.664646 59.733334 31.806061 0 57.535354-26.763636 57.535354-59.733334 0-33.09899-25.858586-59.733333-57.535354-59.733333z m230.4 0c-31.806061 0-57.664646 26.763636-57.664646 59.733333 0 32.969697 25.858586 59.733333 57.664646 59.733334s57.664646-26.763636 57.664647-59.733334c-0.129293-33.09899-25.858586-59.733333-57.664647-59.733333z m115.2-270.222222H166.335354c-63.612121 0-115.2 53.527273-115.2 119.59596v390.981818c0 65.939394 52.751515 126.836364 117.785858 126.836363h175.579798c30.513131 32.581818 157.220202 149.979798 157.220202 149.979798 5.559596 5.818182 14.739394 5.818182 20.29899 0 0 0 92.832323-91.410101 153.212121-149.979798h179.717172c65.034343 0 117.785859-60.89697 117.785859-126.836363V236.606061c0.129293-65.939394-51.458586-119.466667-115.070708-119.466667z m57.535354 510.577778c0 32.969697-27.668687 67.620202-60.250505 67.620202H678.335354c-21.462626 0-40.727273 21.979798-40.727273 21.979798l-124.121212 114.941414-124.121212-114.941414s-23.660606-21.979798-43.830303-21.979798H168.921212c-32.581818 0-60.250505-34.650505-60.250505-67.620202V236.606061c0-32.969697 25.729293-59.733333 57.664647-59.733334h691.329292c31.806061 0 57.535354 26.763636 57.535354 59.733334v391.111111z m0 0" p-id="5543" />
          </svg>
          <div class="mt5 flex-c">
            <span>评论</span>
          </div>
        </a>
      </li>
      <li :class="currentItemIndex === 2 ? 'active-tab-handle': ''" @mouseover="tabItemHandle(2)">
        <a href="#" class="flex-column">
          <svg t="1590133462655" class="icon" width="21" height="21" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5679">
            <path fill="currentColor" d="M 841.143 621.714 c -59.928 0 -112.607 29.215 -145.964 73.714 L 430.607 570.964 c 5.25 -18.785 8.25 -38.5 8.25 -58.964 s -3 -40.18 -8.25 -58.964 l 264.572 -124.464 c 33.357 44.499 86.036 73.714 145.964 73.714 c 101 0 182.857 -81.858 182.857 -182.857 S 942.142 36.57 841.143 36.57 S 658.286 118.43 658.286 219.43 c 0 14.893 2.285 29.143 5.606 43 L 399.536 386.821 c -39.644 -56.928 -105.465 -94.25 -180.107 -94.25 C 98.214 292.571 0 390.786 0 512 s 98.214 219.429 219.429 219.429 c 74.642 0 140.463 -37.322 180.107 -94.25 L 663.892 761.57 c -3.32 13.857 -5.606 28.107 -5.606 43 c 0 101 81.858 182.858 182.857 182.858 S 1024 905.57 1024 804.57 s -81.858 -182.857 -182.857 -182.857 Z m 0 -512 c 60.5 0 109.714 49.214 109.714 109.715 s -49.214 109.714 -109.714 109.714 s -109.714 -49.214 -109.714 -109.714 s 49.214 -109.715 109.714 -109.715 Z M 219.429 658.286 c -80.644 0 -146.286 -65.642 -146.286 -146.286 s 65.642 -146.286 146.286 -146.286 S 365.714 431.356 365.714 512 S 300.072 658.286 219.43 658.286 Z m 621.714 256 c -60.5 0 -109.714 -49.214 -109.714 -109.715 s 49.214 -109.714 109.714 -109.714 s 109.714 49.214 109.714 109.714 s -49.214 109.715 -109.714 109.715 Z" p-id="5680" />
          </svg>
          <div class="mt5 flex-c">
            <span>分享</span>
          </div>
        </a>
      </li>
      <li :class="currentItemIndex === 3 ? 'active-tab-handle': ''" @click="tabItemHandle(3)">
        <a href="#" class="flex-column">
          <svg t="1590133549117" class="icon" width="22" height="22" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5816">
            <path fill="currentColor" d="M953.37931 512C953.37931 268.232939 755.767066 70.62069 512 70.62069 268.232934 70.62069 70.62069 268.232939 70.62069 512 70.62069 755.767061 268.232934 953.37931 512 953.37931 755.767066 953.37931 953.37931 755.767061 953.37931 512ZM512 462.063632 362.212652 312.276289C348.324334 298.387966 326.044072 298.464978 312.254535 312.254526 298.368847 326.140211 298.474726 348.41109 312.276286 362.212657L462.063634 512 312.276286 661.787343C298.387968 675.675664 298.46498 697.955927 312.254535 711.745474 326.140204 725.63116 348.411092 725.525278 362.212652 711.723711L512 561.936368 661.787348 711.723711C675.675666 725.612034 697.955928 725.535022 711.745465 711.745474 725.631153 697.859789 725.525274 675.58891 711.723714 661.787343L561.936366 512 711.723714 362.212657C725.612032 348.324336 725.53502 326.044073 711.745465 312.254526 697.859796 298.36884 675.588908 298.474722 661.787348 312.276289L512 462.063632ZM0 512C0 229.230209 229.230204 0 512 0 794.769796 0 1024 229.230209 1024 512 1024 794.769791 794.769796 1024 512 1024 229.230204 1024 0 794.769791 0 512Z" p-id="5817" />
          </svg>
          <div class="mt5 flex-c">
            <span>纠错</span>
          </div>
        </a>
      </li>
    </ul>
    <!-- 返回顶部 -->
    <el-backtop
      ref="backTopRef"
      style="
          width: 50px;
          height:50px;
          background: rgba(255,255,255,1);
          border:1px solid rgba(225, 232, 240, 1);
          position: fixed;
          bottom: 25vh;
          right: 10px;
          border-radius:25px;"
      class="flex-row align-item"
      target=".el-scrollbar__wrap"
      :visibility-height="400"
      :right="10"
      :bottom="150"
    >
      <svg t="1581910838746" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17098" width="20" height="20">
        <path d="M509.44 267.52C504.32 262.4 498.56 259.84 492.8 258.56 488.96 256.64 484.48 256 480 256S471.04 256.64 467.2 258.56C461.44 259.84 455.68 262.4 450.56 267.52l-313.6 313.6c-14.08 14.08-14.08 35.84 0 49.92 14.08 14.08 35.84 14.08 49.92 0L448 369.92l0 558.08C448 945.92 462.08 960 480 960S512 945.92 512 928L512 369.92l261.12 261.12c14.08 14.08 35.84 14.08 49.92 0 14.08-14.08 14.08-35.84 0-49.92L509.44 267.52zM864 128l-768 0C78.08 128 64 142.08 64 160 64 177.92 78.08 192 96 192l768 0C881.92 192 896 177.92 896 160 896 142.08 881.92 128 864 128z" p-id="17099" fill="#A4B8CE" />
      </svg>
    </el-backtop>
    <!-- 分享 -->
    <div v-show="showShare" class="code-img pointer">
      <div class="flex-between align-item">
        <span class="color-252B3A-size-12">分享到微信</span>
        <span class="close-icon" @click="showShare = false">×</span>
      </div>
      <img class="ml10 mr10" src="@/assets/common-images/erweima2.png" alt="">
      <div class="color-252B3A-size-12" style="line-height: .35rem">
        打开微信，点击底部的“发现”，<br>
        使用“扫一扫”，即可将网页分享至朋友圈
      </div>
    </div>
    <!-- 收藏弹窗 -->
    <completeDialog :dialog-visible="collectDialog" content="收藏成功" @dialogClose="collectDialogClose" />
    <el-dialog
      :title="dialogStatus"
      :visible.sync="dialogVisable"
      width="59%"
      :modal-append-to-body="true"
      :append-to-body="true"
      :close-on-click-modal="false"
      class="flex align-item dialog-content"
    >
      <div class="flex-row">
        <ul v-show="dialogStatus === '评论'" class="dialog-item color-666-size-12 pb35" style="width: 90%">
          <li class="flex align-item">
            <span> 完整性：</span>
            <el-rate
              v-model="score"
              class="flex"
              :allow-half="true"
              :disabled-void-icon-class="'el-icon-star-off'"
              :disabled-void-color="'#D6D6D6'"
            />
          </li>
          <li class="mt15 flex align-item">
            <span> 及时性：</span>
            <el-rate
              v-model="score"
              class="flex"
              :allow-half="true"
              :disabled-void-icon-class="'el-icon-star-off'"
              :disabled-void-color="'#D6D6D6'"
            />
          </li>
          <li class="mt15 flex align-item">
            <span> 准确性：</span>
            <el-rate
              v-model="score"
              class="flex"
              :allow-half="true"
              :disabled-void-icon-class="'el-icon-star-off'"
              :disabled-void-color="'#D6D6D6'"
            />
          </li>
          <li class="mt15 flex">
            <span>内容描述：</span>
            <el-input type="textarea" placeholder="留言将由平台筛选后显示，对所有人可见" />
          </li>
          <li class="mt15 flex align-item">
            <span>验证码：</span>
            <div class="input-30 flex align-item">
              <el-input />
              <div class="ml10 code flex-column">0000</div>
              <div class="ml10 color-999-size-12 flex align-item" style="min-width: 3rem">
                <svg t="1590735045899" class="icon mr10" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5405" width="16" height="16">
                  <path d="M911.40249 607.60166c-21.244813-4.248963-46.738589 8.497925-50.987552 29.742738-42.489627 174.207469-195.452282 293.178423-373.908714 293.178424-212.448133 0-386.655602-174.207469-386.655602-386.655602s174.207469-386.655602 386.655602-386.655602c97.726141 0 195.452282 38.240664 263.435685 106.224067h-178.456432c-21.244813 0-42.489627 16.995851-42.489626 42.489626 0 21.244813 16.995851 42.489627 42.489626 42.489627h263.435685c21.244813 0 42.489627-16.995851 42.489626-42.489627v-263.435684c0-21.244813-16.995851-42.489627-42.489626-42.489627-21.244813 0-42.489627 16.995851-42.489627 42.489627v148.713693c-84.979253-76.481328-195.452282-118.970954-310.174274-118.970955-259.186722 0-471.634855 212.448133-471.634854 471.634855s212.448133 471.634855 471.634854 471.634855c216.697095 0 403.651452-148.713693 458.887967-356.912863 4.248963-21.244813-8.497925-42.489627-29.742738-50.987552z" p-id="5406" fill="#999999" />
                </svg>
                看不清？换一张
              </div>
            </div>
          </li>
          <li class="mt15 flex align-item">
            <span />
            <div class="handle-btn flex-column color-fff-size-12">提交评价</div>
          </li>
        </ul>
        <ul v-show="dialogStatus === '纠错'" class="dialog-item color-666-size-12 pb35">
          <li class="mt15 flex">
            <span>数据纠错：</span>
            <el-input type="textarea" placeholder="请输入内容" />
          </li>
          <li class="mt15 flex align-item">
            <span>验证码：</span>
            <div class="input-30 flex align-item">
              <el-input />
              <div class="ml10 code flex-column">0000</div>
              <div class="ml10 color-999-size-12 flex align-item" style="min-width: 3rem">
                <svg t="1590735045899" class="icon mr10" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5405" width="16" height="16">
                  <path d="M911.40249 607.60166c-21.244813-4.248963-46.738589 8.497925-50.987552 29.742738-42.489627 174.207469-195.452282 293.178423-373.908714 293.178424-212.448133 0-386.655602-174.207469-386.655602-386.655602s174.207469-386.655602 386.655602-386.655602c97.726141 0 195.452282 38.240664 263.435685 106.224067h-178.456432c-21.244813 0-42.489627 16.995851-42.489626 42.489626 0 21.244813 16.995851 42.489627 42.489626 42.489627h263.435685c21.244813 0 42.489627-16.995851 42.489626-42.489627v-263.435684c0-21.244813-16.995851-42.489627-42.489626-42.489627-21.244813 0-42.489627 16.995851-42.489627 42.489627v148.713693c-84.979253-76.481328-195.452282-118.970954-310.174274-118.970955-259.186722 0-471.634855 212.448133-471.634854 471.634855s212.448133 471.634855 471.634854 471.634855c216.697095 0 403.651452-148.713693 458.887967-356.912863 4.248963-21.244813-8.497925-42.489627-29.742738-50.987552z" p-id="5406" fill="#999999" />
                </svg>
                看不清？换一张
              </div>
            </div>
          </li>
          <li class="mt15 flex align-item">
            <span />
            <div class="handle-btn flex-column color-fff-size-12">提交反馈</div>
            <div class="ml10 handle-btn-bg-fff flex-column color-333-size-12">关闭</div>
          </li>
        </ul>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import completeDialog from '@/components/SecondLevelList/completeDialog'
export default {
  components: {
    completeDialog
  },
  props: {
    isGuide: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      currentIndex: 0,
      currentItemIndex: 0,
      visible: false,
      collectDialog: false,
      dialogVisable: false,
      dialogStatus: '评论',
      showShare: false,
      score: 5
    }
  },
  created() {
    // console.log(this.$refs)
  },
  mounted() {
    const dom = document.querySelector('.el-scrollbar__wrap')
    dom.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    const dom = document.querySelector('.el-scrollbar__wrap')
    dom.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const dom = document.querySelector('.el-scrollbar__wrap')
      if (dom.scrollTop > 450) {
        this.visible = true
      } else {
        this.visible = false
      }
    },
    // 操作指南
    tabHandle(index) {
      this.currentIndex = index
    },
    // 收藏系列
    tabItemHandle(index) {
      this.currentItemIndex = index
      switch (index) {
        case 0:
          this.collectDialog = true
          break
        case 1:
          this.dialogVisable = true
          this.dialogStatus = '评论'
          break
        case 2:
          this.showShare = true
          break
        case 3:
          this.dialogVisable = true
          this.dialogStatus = '纠错'
          break
      }
    },
    // 收藏弹窗-》关闭
    collectDialogClose() {
      this.collectDialog = false
    }
  }
}
</script>
<style lang="scss" scoped>
  /* 侧边栏固定部分 */
  .fixed-handle{
    position: fixed;
    bottom: 35vh;
    right: .2rem;
    width: 1rem;
    &>li{
      padding: .2rem .1rem;
      border-left: 1px solid #E1E8F0;
      border-right: 1px solid #E1E8F0;
      border-top: 1px solid #E1E8F0;
      background: #ffffff;
      color: #A4B8CE;
      font-size: .24rem;
      text-align: center;
      &:last-child{
        border-bottom: 1px solid #E1E8F0;
      }
    }
    .active-tab-handle{
      color: #ffffff;
      background: #397DFA;
    }
  }
  // 弹窗部分
  .dialog-item {
    li {
      span {
        display: inline-block;
        min-width: 2rem;
        text-align: justify;
      }
    }
    .code{
      width: 2rem;
      right: 100px;
      padding: 0 .5rem;
      height: .6rem;
      background:rgba(255,255,255,1);
      border:1px solid rgba(232, 232, 232, 1);
      box-sizing: border-box;
      border-radius:2px;
      font-size: .36rem;
      font-weight:bold;
      color:rgba(57,125,250,1);
      line-height: .4rem;
    }
    .handle-btn {
      min-width: 2.4rem;
      padding: 0 .5rem;
      height: .6rem;
      background:rgba(57,125,250,1);
      border-radius:2px;
    }
    .handle-btn-bg-fff{
      min-width: 2.4rem;
      padding: 0 .5rem;
      height: .6rem;
      background:rgba(255,255,255,1);
      border:1px solid rgba(232, 232, 232, 1);
      border-radius:2px;
    }
  }
  .code-img {
    width: 5rem;
    bottom: 21vh;
    min-height: 4.9rem;
    right: 1.2rem;
    padding: 0 .3rem .5rem .3rem;
    box-sizing: border-box;
    border: 1px solid #EFEFEF;
    background: #fff;
    position: fixed;
    img {
      width: 90%;
      height: 90%;
    }
    .close-icon {
      font-size: .6rem;
      color: #7E8897;
      top: 0;
      right: .2rem;
    }
  }

</style>

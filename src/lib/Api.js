// 숙제 - 고도현
export const homeworkApi = {
  getHomeworkList: () => {
    return `/homework`;
  },
  getHomeworkContent: (userId, homeworkId) => {
    return `/homework/${userId}`;
  },
  assignmentHomework: () => {
    return `/homework`;
  },
  returnHomework: (userId) => {
    return `/homework/${userId}/personal-homework`;
  },
  completionHomework: (userId) => {
    return `/homework/${userId}/personal-homework`;
  },
  chagneHomework: (userId) => {
    return `/homework/${userId}`;
  },
  eliminationHomework: (userId) => {
    return `/homework/${userId}`;
  },
};

// 벌금 - 고도현
export const fineApi = {
  getFineListById: (userId) => {
    return `/fine/list/${userId}`;
  },
  getAllFineList: () => {
    return `/fine/list`;
  },
  impositionFine: () => {
    return `/fine/imposition`;
  },
  completionFine: () => {
    return `/fine/completion`;
  },
  eliminationFine: () => {
    return `/fine/elimination`;
  },
};

// 공지사항 - 안영준
export const noticeApi = {
  fetchNoticeListAndVoteList: () => {
    return `/notification`;
  },
  registNotice: () => {
    return `/notification/notice`;
  },
  modifyNotice: (notificationId) => {
    return `/notification/notice/${notificationId}`;
  },

  getNoticeContent: (notificationId) => {
    return `/notification/notice/${notificationId}`;
  },
  eliminationNotice: (notificationId) => {
    return `/notification/${notificationId}`;
  },
  registVote: () => {
    return `/notification/vote`;
  },
  modifyVote: (notificationId) => {
    return `/notification/vote/${notificationId}`;
  },
  getVoteContent: (notificationId) => {
    return `/notification/vote/${notificationId}`;
  },
  vote: (notificationId) => {
    return `/notification/vote/${notificationId}`;
  },
};

// 어드민 - 안영준
export const adminApi = {
  authorityHomework: () => {
    return `/authority/homework`;
  },
  authorityFine: () => {
    return `/authority/fine`;
  },
  accessAuth: () => {
    return `/authority/auth`;
  },
  getUserList: () => {
    return `/authority/list/user`;
  },
  getAuthList: () => {
    return `/authority/list/auth`;
  },
};

//인증 - 김대웅
export const authApi = {
  login: () => {
    return `/auth`;
  },
  signUp: () => {
    return `/auth/sign-up`;
  },
  reAccessToken: () => {
    return `/auth`;
  },
};

// 마이페이지 - 김대웅
export const myPageApi = {
  stdInfo: () => {
    return `/student`;
  },
  chagneStdInfo: () => {
    return `/student`;
  },
  changePassword: () => {
    return `/student/password`;
  },
  changeProfile: () => {
    return `/student/profile`;
  },
  field: () => {
    return `/fields`;
  },
};

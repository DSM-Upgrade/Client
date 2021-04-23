// 숙제 - 고도현
export const homeworkApi = {
  getHomeworkList: (userId) => {
    return `/homework/list/${userId}`;
  },
  getHomeworkContent: (userId, homeworkId) => {
    return `/homework/content/${userId}/${homeworkId}`;
  },
  assignmentHomework: () => {
    return `/homework/assignment`;
  },
  returnHomework: () => {
    return `/homework/return`;
  },
  completionHomework: () => {
    return `/homework/completion`;
  },
  chagneHomework: () => {
    return `/homework/change`;
  },
  eliminationHomework: () => {
    return `/homework/elimination`;
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
  auth: () => {
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

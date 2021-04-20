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

// 공지사항 - 고도현
export const noticeApi = {
  getAllNoticeList: () => {
    return `/notice/list`;
  },
  getNoticeContent: (noticeId) => {
    return `/notice/content/${noticeId}`;
  },
  registrationNotice: () => {
    return `/notice/registration`;
  },
  changeNotice: () => {
    return `/notice/change`;
  },
  eliminationNotice: () => {
    return `/notice/elimination`;
  },
};

// 어드민 - 안영준 (미완성)
export const adminApi = {
  authorityHomework: () => {
    return `/admin/authority/homework`;
  },
  authorityFine: () => {
    return `/admin/authority/fine`;
  },
  auth: () => {
    return `/admin/auth`;
  },
  enrollNotice: () => {
    return `/admin/notice`;
  },
  enrollVote: () => {
    return `/admin/vote`;
  },
  recordFine: () => {
    return `/admin/fine`;
  },
  getUserList: () => {
    return `/list/user`;
  },
  getFineList: () => {
    return `/list/fine`;
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
    return `fields`;
  },
};

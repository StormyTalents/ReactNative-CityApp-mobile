import Images from "./Images"

const dummyData = {
  bankid_data: {
    name: "SAMIR J",
    bank: "Swedbank och Sparkbankerna"
  },
  home_data: {
    name: "Samir",
    date: "12th Oct 2020",
    weather: "23\u00B0 - Sunny",
  },
  basic_info: {
    first_name: "Rafat",
    last_name: "Alkhateeb",
    email_address: "Rafat.addte@gmail.com",
    phone_number: "+9624448883311",
    stress_name: "Stress 1234",
    zip_code: "123 45",
    city: "City",
  },
  notification_data: [
    {
      title: "Traffic Announcement",
      state: false,
    },
    {
      title: "Crisis Information",
      state: false,
    },
    {
      title: "Power Outages",
      state: false,
    }
  ],
  about_data: [
    {
      title: "CitiApp story",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      title: "Our Mission",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ],
  my_children_data: [
    {
      name: "Alan",
      gender: "Daughter",
      birthday: "04/01/2020",
      age: "23"
    },
    {
      name: "Blan",
      gender: "Son",
      birthday: "04/01/2020",
      age: "23"
    },
    {
      name: "Clan",
      gender: "Son",
      birthday: "04/01/2020",
      age: "23"
    },
    {
      name: "Alan",
      gender: "Daughter",
      birthday: "04/01/2020",
      age: "23"
    },
  ],
  help_support_faqs: [
    {
      faq: 'Q #1 write the question in sentence that is up to two lines to ekeep copy?'
    },
    {
      faq: 'Q #1 write the question in sentence that is up to two lines to ekeep copy?'
    },
    {
      faq: 'Q #1 write the question in sentence that is up to two lines to ekeep copy?'
    },
    {
      faq: 'Q #1 write the question in sentence that is up to two lines to ekeep copy?'
    },
  ],
  feed_back: "Thank you for your feedback, If this did not help, please do check here or here. you may also find the below useful.",
  add_faqs: [
    {
      text: 'How to create an error report?',
      description: 'Q #1 write the question in sentence that is up to two lines to ekeep copy?Q #1 write the question in sentence that is up to two lines to ekeep copy?Q #1 write the question in sentence that is up to two lines to ekeep copy?Q #1 write the question in sentence that is up to two lines to ekeep copy?Q #1 write the question in sentence that is up to two lines to ekeep copy?'
    },
    {
      text: 'How to get update about error report?',
      description: 'Q #1 write the question in sentence that is up to two lines to ekeep copy?Q #1 write the question in sentence that is up to two lines to ekeep copy?Q #1 write the question in sentence that is up to two lines to ekeep copy?Q #1 write the question in sentence that is up to two lines to ekeep copy?Q #1 write the question in sentence that is up to two lines to ekeep copy?'
    },
    {
      text: 'How to question?',
      description: 'Q #1 write the question in sentence that is up to two lines to ekeep copy?Q #1 write the question in sentence that is up to two lines to ekeep copy?Q #1 write the question in sentence that is up to two lines to ekeep copy?Q #1 write the question in sentence that is up to two lines to ekeep copy?Q #1 write the question in sentence that is up to two lines to ekeep copy?'
    },
    {
      text: 'How to question?',
      description: 'Q #1 write the question in sentence that is up to two lines to ekeep copy?Q #1 write the question in sentence that is up to two lines to ekeep copy?Q #1 write the question in sentence that is up to two lines to ekeep copy?Q #1 write the question in sentence that is up to two lines to ekeep copy?Q #1 write the question in sentence that is up to two lines to ekeep copy?'
    },
    {
      text: 'How to question?',
      description: 'Q #1 write the question in sentence that is up to two lines to ekeep copy?Q #1 write the question in sentence that is up to two lines to ekeep copy?Q #1 write the question in sentence that is up to two lines to ekeep copy?Q #1 write the question in sentence that is up to two lines to ekeep copy?Q #1 write the question in sentence that is up to two lines to ekeep copy?'
    }
  ],
  expanded: [false, false, false, false, false],
  matter_data: [
    {
      title: 'Title1',
      id: '#124AA56800A',
      text: 'Lorem ipsum dolor sit amet, das sda s sconsecetur adipiscing elit. Non dddd vulputate in nunc dolor at. Semper. dd',
      time: 'Second ago',
      mine: false,
      type: 0,
    },
    {
      title: 'Title2',
      id: '#124AA56800A',
      text: 'Lorem ipsum dolor sit amet, das sda s sconsecetur adipiscing elit. Non dddd vulputate in nunc dolor at. Semper. dd',
      time: 'Second ago',
      mine: false,
      type: 1,
    },
    {
      title: 'Title1',
      id: '#124AA56800A',
      text: 'Lorem ipsum dolor sit amet, das sda s sconsecetur adipiscing elit. Non dddd vulputate in nunc dolor at. Semper. dd',
      time: 'Second ago',
      mine: false,
      type: 2,
    },
    {
      title: 'Title1',
      id: '#124AA56800A',
      text: 'Lorem ipsum dolor sit amet, das sda s sconsecetur adipiscing elit. Non dddd vulputate in nunc dolor at. Semper. dd',
      time: 'Second ago',
      mine: false,
      type: 3,
    },
    {
      title: 'Title2',
      id: '#124AA56800A',
      text: 'Lorem ipsum dolor sit amet, das sda s sconsecetur adipiscing elit. Non dddd vulputate in nunc dolor at. Semper. dd',
      time: 'Second ago',
      mine: false,
      type: 1,
    },
    {
      title: 'Title1',
      id: '#124AA56800A',
      text: 'Lorem ipsum dolor sit amet, das sda s sconsecetur adipiscing elit. Non dddd vulputate in nunc dolor at. Semper. dd',
      time: 'Second ago',
      mine: false,
      type: 3,
    },
    {
      title: 'Title1',
      id: '#124AA56800A',
      text: 'Lorem ipsum dolor sit amet, das sda s sconsecetur adipiscing elit. Non dddd vulputate in nunc dolor at. Semper. dd',
      time: 'Second ago',
      mine: false,
      type: 3,
    },
    {
      title: 'Title2',
      id: '#124AA56800A',
      text: 'Lorem ipsum dolor sit amet, das sda s sconsecetur adipiscing elit. Non dddd vulputate in nunc dolor at. Semper. dd',
      time: 'Second ago',
      mine: true,
      type: 0,
    },
    {
      title: 'Title1',
      id: '#124AA56800A',
      text: 'Lorem ipsum dolor sit amet, das sda s sconsecetur adipiscing elit. Non dddd vulputate in nunc dolor at. Semper. dd',
      time: 'Second ago',
      mine: false,
      type: 3,
    },
    {
      title: 'Title1',
      id: '#124AA56800A',
      text: 'Lorem ipsum dolor sit amet, das sda s sconsecetur adipiscing elit. Non dddd vulputate in nunc dolor at. Semper. dd',
      time: 'Second ago',
      mine: true,
      type: 0,
    },
    {
      title: 'Title2',
      id: '#124AA56800A',
      text: 'Lorem ipsum dolor sit amet, das sda s sconsecetur adipiscing elit. Non dddd vulputate in nunc dolor at. Semper. dd',
      time: 'Second ago',
      mine: true,
      type: 0,
    },
    {
      title: 'Title1',
      id: '#124AA56800A',
      text: 'Lorem ipsum dolor sit amet, das sda s sconsecetur adipiscing elit. Non dddd vulputate in nunc dolor at. Semper. dd',
      time: 'Second ago',
      mine: true,
      type: 0,
    },
    {
      title: 'Title1',
      id: '#124AA56800A',
      text: 'Lorem ipsum dolor sit amet, das sda s sconsecetur adipiscing elit. Non dddd vulputate in nunc dolor at. Semper. dd',
      time: 'Second ago',
      mine: true,
      type: 1,
    },
    {
      title: 'Title2',
      id: '#124AA56800A',
      text: 'Lorem ipsum dolor sit amet, das sda s sconsecetur adipiscing elit. Non dddd vulputate in nunc dolor at. Semper. dd',
      time: 'Second ago',
      mine: true,
      type: 1,
    },
    {
      title: 'Title1',
      id: '#124AA56800A',
      text: 'Lorem ipsum dolor sit amet, das sda s sconsecetur adipiscing elit. Non dddd vulputate in nunc dolor at. Semper. dd',
      time: 'Second ago',
      mine: true,
      type: 1,
    },
    {
      title: 'Title2',
      id: '#124AA56800A',
      text: 'Lorem ipsum dolor sit amet, das sda s sconsecetur adipiscing elit. Non dddd vulputate in nunc dolor at. Semper. dd',
      time: 'Second ago',
      mine: false,
      type: 1,
    },
    {
      title: 'Title1',
      id: '#124AA56800A',
      text: 'Lorem ipsum dolor sit amet, das sda s sconsecetur adipiscing elit. Non dddd vulputate in nunc dolor at. Semper. dd',
      time: 'Second ago',
      mine: false,
      type: 2,
    },
    {
      title: 'Title1',
      id: '#124AA56800A',
      text: 'Lorem ipsum dolor sit amet, das sda s sconsecetur adipiscing elit. Non dddd vulputate in nunc dolor at. Semper. dd',
      time: 'Second ago',
      mine: false,
      type: 0,
    },
    {
      title: 'Title2',
      id: '#124AA56800A',
      text: 'Lorem ipsum dolor sit amet, das sda s sconsecetur adipiscing elit. Non dddd vulputate in nunc dolor at. Semper. dd',
      time: 'Second ago',
      mine: false,
      type: 1,
    },
    {
      title: 'Title1',
      id: '#124AA56800A',
      text: 'Lorem ipsum dolor sit amet, das sda s sconsecetur adipiscing elit. Non dddd vulputate in nunc dolor at. Semper. dd',
      time: 'Second ago',
      mine: true,
      type: 2,
    },
    {
      title: 'Title1',
      id: '#124AA56800A',
      text: 'Lorem ipsum dolor sit amet, das sda s sconsecetur adipiscing elit. Non dddd vulputate in nunc dolor at. Semper. dd',
      time: 'Second ago',
      mine: true,
      type: 3,
    },
    {
      title: 'Title2',
      id: '#124AA56800A',
      text: 'Lorem ipsum dolor sit amet, das sda s sconsecetur adipiscing elit. Non dddd vulputate in nunc dolor at. Semper. dd',
      time: 'Second ago',
      mine: false,
      type: 1,
    },
    {
      title: 'Title1',
      id: '#124AA56800A',
      text: 'Lorem ipsum dolor sit amet, das sda s sconsecetur adipiscing elit. Non dddd vulputate in nunc dolor at. Semper. dd',
      time: 'Second ago',
      mine: false,
      type: 2,
    },
    {
      title: 'Title1',
      id: '#124AA56800A',
      text: 'Lorem ipsum dolor sit amet, das sda s sconsecetur adipiscing elit. Non dddd vulputate in nunc dolor at. Semper. dd',
      time: 'Second ago',
      mine: false,
      type: 0,
    },
    {
      title: 'Title2',
      id: '#124AA56800A',
      text: 'Lorem ipsum dolor sit amet, das sda s sconsecetur adipiscing elit. Non dddd vulputate in nunc dolor at. Semper. dd',
      time: 'Second ago',
      mine: false,
      type: 1,
    },
    {
      title: 'Title1',
      id: '#124AA56800A',
      text: 'Lorem ipsum dolor sit amet, das sda s sconsecetur adipiscing elit. Non dddd vulputate in nunc dolor at. Semper. dd',
      time: 'Second ago',
      mine: false,
      type: 2,
    },
    {
      title: 'Title1',
      id: '#124AA56800A',
      text: 'Lorem ipsum dolor sit amet, das sda s sconsecetur adipiscing elit. Non dddd vulputate in nunc dolor at. Semper. dd',
      time: 'Second ago',
      mine: true,
      type: 2,
    },
    {
      title: 'Title2',
      id: '#124AA56800A',
      text: 'Lorem ipsum dolor sit amet, das sda s sconsecetur adipiscing elit. Non dddd vulputate in nunc dolor at. Semper. dd',
      time: 'Second ago',
      mine: false,
      type: 3,
    },
    {
      title: 'Title1',
      id: '#124AA56800A',
      text: 'Lorem ipsum dolor sit amet, das sda s sconsecetur adipiscing elit. Non dddd vulputate in nunc dolor at. Semper. dd',
      time: 'Second ago',
      mine: true,
      type: 3,
    },
    {
      title: 'Title1',
      id: '#124AA56800A',
      text: 'Lorem ipsum dolor sit amet, das sda s sconsecetur adipiscing elit. Non dddd vulputate in nunc dolor at. Semper. dd',
      time: 'Second ago',
      mine: true,
      type: 2,
    },
    {
      title: 'Title1',
      id: '#124AA56800A',
      text: 'Lorem ipsum dolor sit amet, das sda s sconsecetur adipiscing elit. Non dddd vulputate in nunc dolor at. Semper. dd',
      time: 'Second ago',
      mine: true,
      type: 3,
    },
    {
      title: 'Title1',
      id: '#124AA56800A',
      text: 'Lorem ipsum dolor sit amet, das sda s sconsecetur adipiscing elit. Non dddd vulputate in nunc dolor at. Semper. dd',
      time: 'Second ago',
      mine: true,
      type: 2,
    },
    {
      title: 'Title1',
      id: '#124AA56800A',
      text: 'Lorem ipsum dolor sit amet, das sda s sconsecetur adipiscing elit. Non dddd vulputate in nunc dolor at. Semper. dd',
      time: 'Second ago',
      mine: true,
      type: 3,
    },
  ],
  my_matter_data: [
    {
      title: 'Cast Title up to two lines',
      id: '#Cast Number 1232134422',
      time: '01:24 PM',
      status: 1,
      date: '2020/12/12',
      action: 'No Action',
      newly: false,
    },
    {
      title: 'Cast Title',
      id: '#Cast Number 1232134422',
      time: '01:24 PM',
      status: 1,
      date: '2020/12/12',
      action: 'No Action',
      newly: false,
    },
    {
      title: 'Cast Title',
      id: '#Cast Number 1232134422',
      time: '01:24 PM',
      status: 3,
      date: '2020/12/12',
      action: 'No Action',
      newly: false,
    },
    {
      title: 'Cast Title',
      id: '#Cast Number 1232134422',
      time: '01:24 PM',
      status: 2,
      date: '2020/12/12',
      action: 'No Action',
      newly: true,
    },
    {
      title: 'Cast Title',
      id: '#Cast Number 1232134422',
      time: '01:24 PM',
      status: 3,
      date: '2020/12/12',
      action: 'No Action',
      newly: true,
    },
    {
      title: 'Cast Title',
      id: '#Cast Number 1232134422',
      time: '01:24 PM',
      status: 0,
      date: '2020/12/12',
      action: 'No Action',
      newly: false,
    },
    {
      title: 'Cast Title',
      id: '#Cast Number 1232134422',
      time: '01:24 PM',
      status: 0,
      date: '2020/12/12',
      action: 'No Action',
      newly: false,
    },
    {
      title: 'Cast Title',
      id: '#Cast Number 1232134422',
      time: '01:24 PM',
      status: 0,
      date: '2020/12/12',
      action: 'No Action',
      newly: false,
    },
    {
      title: 'Cast Title',
      id: '#Cast Number 1232134422',
      time: '01:24 PM',
      status: 0,
      date: '2020/12/12',
      action: 'No Action',
      newly: false,
    },
    {
      title: 'Cast Title',
      id: '#Cast Number 1232134422',
      time: '01:24 PM',
      status: 0,
      date: '2020/12/12',
      action: 'No Action',
      newly: false,
    },
    {
      title: 'Cast Title',
      id: '#Cast Number 1232134422',
      time: '01:24 PM',
      status: 0,
      date: '2020/12/12',
      action: 'No Action',
      newly: false,
    },
    {
      title: 'Cast Title',
      id: '#Cast Number 1232134422',
      time: '01:24 PM',
      status: 0,
      date: '2020/12/12',
      action: 'No Action',
      newly: false,
    },
    {
      title: 'Cast Title',
      id: '#Cast Number 1232134422',
      time: '01:24 PM',
      status: 0,
      date: '2020/12/12',
      action: 'No Action',
      newly: false,
    },
    {
      title: 'Cast Title',
      id: '#Cast Number 1232134422',
      time: '01:24 PM',
      status: 0,
      date: '2020/12/12',
      action: 'No Action',
      newly: false,
    },
    {
      title: 'Cast Title',
      id: '#Cast Number 1232134422',
      time: '01:24 PM',
      status: 0,
      date: '2020/12/12',
      action: 'No Action',
      newly: false,
    },
    {
      title: 'Cast Title',
      id: '#Cast Number 1232134422',
      time: '01:24 PM',
      status: 0,
      date: '2020/12/12',
      action: 'No Action',
      newly: false,
    },
    {
      title: 'Cast Title',
      id: '#Cast Number 1232134422',
      time: '01:24 PM',
      status: 0,
      date: '2020/12/12',
      action: 'No Action',
      newly: false,
    },
    {
      title: 'Cast Title',
      id: '#Cast Number 1232134422',
      time: '01:24 PM',
      status: 0,
      date: '2020/12/12',
      action: 'No Action',
      newly: false,
    },
    {
      title: 'Cast Title',
      id: '#Cast Number 1232134422',
      time: '01:24 PM',
      status: 0,
      date: '2020/12/12',
      action: 'No Action',
      newly: false,
    },
    {
      title: 'Cast Title',
      id: '#Cast Number 1232134422',
      time: '01:24 PM',
      status: 0,
      date: '2020/12/12',
      action: 'No Action',
      newly: false,
    },
  ],
  activity_data: [
    {
      image: Images.sample_activity1,
      date: '12th Oct',
      time: '10:00-12:00 PM',
      name: 'Jazz Night',
      location: 'Location',
      city: 'City Name',
      online: 'One line',
      distance: '2km',
      followers: [
        {
          icon: Images.follower1,
        },
        {
          icon: Images.follower2,
        },
        {
          icon: Images.follower3,
        }
      ],
      number: '1.2k Attendees',
      liked: false,
    },
    {
      image: Images.sample_activity2,
      date: '12th Oct',
      time: '10:00-12:00 PM',
      name: 'Jazz Night',
      location: 'Location',
      city: 'City Name',
      online: 'One line',
      distance: '2km',
      followers: [
        {
          icon: Images.follower1,
        },
        {
          icon: Images.follower2,
        },
        {
          icon: Images.follower3,
        }
      ],
      number: '1.2k Attendees',
      liked: false,
    }
  ],
  near_you_data: [
    {
      image: Images.near1,
      date: '12th Oct',
      time: '10:00-12:00 PM',
      name: 'Jazz Night',
      location: 'Location',
      city: 'City Name',
      online: 'One line',
      distance: '2km',
      followers: [
        {
          icon: Images.follower1,
        },
        {
          icon: Images.follower2,
        },
        {
          icon: Images.follower3,
        }
      ],
      number: '1.2k Attendees',
      liked: false,
      description: 'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur'
    },
    {
      image: Images.near2,
      date: '12th Oct',
      time: '10:00-12:00 PM',
      name: 'Jazz Night',
      location: 'Location',
      city: 'City Name',
      online: 'One line',
      distance: '2km',
      followers: [
        {
          icon: Images.follower1,
        },
        {
          icon: Images.follower2,
        },
        {
          icon: Images.follower3,
        }
      ],
      number: '1.2k Attendees',
      liked: false,
    },
    {
      image: Images.near3,
      date: '12th Oct',
      time: '10:00-12:00 PM',
      name: 'Jazz Night',
      location: 'Location',
      city: 'City Name',
      online: 'One line',
      distance: '2km',
      followers: [
        {
          icon: Images.follower1,
        },
        {
          icon: Images.follower2,
        },
        {
          icon: Images.follower3,
        }
      ],
      number: '1.2k Attendees',
      liked: true,
    },
    {
      image: Images.near4,
      date: '12th Oct',
      time: '10:00-12:00 PM',
      name: 'Jazz Night',
      location: 'Location',
      city: 'City Name',
      online: 'One line',
      distance: '2km',
      followers: [
        {
          icon: Images.follower1,
        },
        {
          icon: Images.follower2,
        },
        {
          icon: Images.follower3,
        }
      ],
      number: '1.2k Attendees',
      liked: false,
    },
    {
      image: Images.near1,
      date: '12th Oct',
      time: '10:00-12:00 PM',
      name: 'Jazz Night',
      location: 'Location',
      city: 'City Name',
      online: 'One line',
      distance: '2km',
      followers: [
        {
          icon: Images.follower1,
        },
        {
          icon: Images.follower2,
        },
        {
          icon: Images.follower3,
        }
      ],
      number: '1.2k Attendees',
      liked: false,
      description: 'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur'
    },
    {
      image: Images.near2,
      date: '12th Oct',
      time: '10:00-12:00 PM',
      name: 'Jazz Night',
      location: 'Location',
      city: 'City Name',
      online: 'One line',
      distance: '2km',
      followers: [
        {
          icon: Images.follower1,
        },
        {
          icon: Images.follower2,
        },
        {
          icon: Images.follower3,
        }
      ],
      number: '1.2k Attendees',
      liked: false,
    },
    {
      image: Images.near3,
      date: '12th Oct',
      time: '10:00-12:00 PM',
      name: 'Jazz Night',
      location: 'Location',
      city: 'City Name',
      online: 'One line',
      distance: '2km',
      followers: [
        {
          icon: Images.follower1,
        },
        {
          icon: Images.follower2,
        },
        {
          icon: Images.follower3,
        }
      ],
      number: '1.2k Attendees',
      liked: true,
    },
    {
      image: Images.near4,
      date: '12th Oct',
      time: '10:00-12:00 PM',
      name: 'Jazz Night',
      location: 'Location',
      city: 'City Name',
      online: 'One line',
      distance: '2km',
      followers: [
        {
          icon: Images.follower1,
        },
        {
          icon: Images.follower2,
        },
        {
          icon: Images.follower3,
        }
      ],
      number: '1.2k Attendees',
      liked: false,
    },
    {
      image: Images.near1,
      date: '12th Oct',
      time: '10:00-12:00 PM',
      name: 'Jazz Night',
      location: 'Location',
      city: 'City Name',
      online: 'One line',
      distance: '2km',
      followers: [
        {
          icon: Images.follower1,
        },
        {
          icon: Images.follower2,
        },
        {
          icon: Images.follower3,
        }
      ],
      number: '1.2k Attendees',
      liked: false,
      description: 'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur'
    },
    {
      image: Images.near2,
      date: '12th Oct',
      time: '10:00-12:00 PM',
      name: 'Jazz Night',
      location: 'Location',
      city: 'City Name',
      online: 'One line',
      distance: '2km',
      followers: [
        {
          icon: Images.follower1,
        },
        {
          icon: Images.follower2,
        },
        {
          icon: Images.follower3,
        }
      ],
      number: '1.2k Attendees',
      liked: false,
    },
    {
      image: Images.near3,
      date: '12th Oct',
      time: '10:00-12:00 PM',
      name: 'Jazz Night',
      location: 'Location',
      city: 'City Name',
      online: 'One line',
      distance: '2km',
      followers: [
        {
          icon: Images.follower1,
        },
        {
          icon: Images.follower2,
        },
        {
          icon: Images.follower3,
        }
      ],
      number: '1.2k Attendees',
      liked: true,
    },
    {
      image: Images.near4,
      date: '12th Oct',
      time: '10:00-12:00 PM',
      name: 'Jazz Night',
      location: 'Location',
      city: 'City Name',
      online: 'One line',
      distance: '2km',
      followers: [
        {
          icon: Images.follower1,
        },
        {
          icon: Images.follower2,
        },
        {
          icon: Images.follower3,
        }
      ],
      number: '1.2k Attendees',
      liked: false,
    }
  ],
  activity_pool_data: [
    {
      image: Images.pool1,
      date: '12th Oct',
      time: '10:00-12:00 PM',
      name: 'Swimming pool1',
      location: 'Location',
      city: 'City Name',
      online: 'One line',
      distance: '2km',
      status: 0,
      rate: 4,
      number: '1.2k Attendees',
      liked: false,
    },
    {
      image: Images.pool2,
      date: '12th Oct',
      time: '10:00-12:00 PM',
      name: 'Swimming pool1',
      location: 'Location',
      city: 'City Name',
      online: 'One line',
      distance: '2km',
      status: 1,
      rate: 4,
      number: '1.2k Attendees',
      liked: false,
    }
  ],
  near_pool_you_data: [
    {
      image: Images.pooler1,
      date: '12th Oct',
      time: '10:00-12:00 PM',
      name: 'Swimming pool1',
      location: 'Location',
      city: 'City Name',
      online: 'One line',
      distance: '2km',
      status: 0,
      rate: 4,
      number: '1.2k Attendees',
      liked: true,
    },
    {
      image: Images.pooler2,
      date: '12th Oct',
      time: '10:00-12:00 PM',
      name: 'Swimming pool1',
      location: 'Location',
      city: 'City Name',
      online: 'One line',
      distance: '2km',
      status: 1,
      rate: 4,
      number: '1.2k Attendees',
      liked: false,
    },
    {
      image: Images.pooler3,
      date: '12th Oct',
      time: '10:00-12:00 PM',
      name: 'Swimming pool1',
      location: 'Location',
      city: 'City Name',
      online: 'One line',
      distance: '2km',
      status: 0,
      rate: 4,
      number: '1.2k Attendees',
      liked: true,
    },
    {
      image: Images.pooler1,
      date: '12th Oct',
      time: '10:00-12:00 PM',
      name: 'Swimming pool1',
      location: 'Location',
      city: 'City Name',
      online: 'One line',
      distance: '2km',
      status: 0,
      rate: 4,
      number: '1.2k Attendees',
      liked: false,
    },
    {
      image: Images.pooler1,
      date: '12th Oct',
      time: '10:00-12:00 PM',
      name: 'Swimming pool1',
      location: 'Location',
      city: 'City Name',
      online: 'One line',
      distance: '2km',
      status: 0,
      rate: 4,
      number: '1.2k Attendees',
      liked: true,
    },
    {
      image: Images.pooler2,
      date: '12th Oct',
      time: '10:00-12:00 PM',
      name: 'Swimming pool1',
      location: 'Location',
      city: 'City Name',
      online: 'One line',
      distance: '2km',
      status: 1,
      rate: 4,
      number: '1.2k Attendees',
      liked: false,
    },
    {
      image: Images.pooler3,
      date: '12th Oct',
      time: '10:00-12:00 PM',
      name: 'Swimming pool1',
      location: 'Location',
      city: 'City Name',
      online: 'One line',
      distance: '2km',
      status: 0,
      rate: 4,
      number: '1.2k Attendees',
      liked: true,
    },
    {
      image: Images.pooler1,
      date: '12th Oct',
      time: '10:00-12:00 PM',
      name: 'Swimming pool1',
      location: 'Location',
      city: 'City Name',
      online: 'One line',
      distance: '2km',
      status: 0,
      rate: 4,
      number: '1.2k Attendees',
      liked: false,
    },
    {
      image: Images.pooler1,
      date: '12th Oct',
      time: '10:00-12:00 PM',
      name: 'Swimming pool1',
      location: 'Location',
      city: 'City Name',
      online: 'One line',
      distance: '2km',
      status: 0,
      rate: 4,
      number: '1.2k Attendees',
      liked: true,
    },
    {
      image: Images.pooler2,
      date: '12th Oct',
      time: '10:00-12:00 PM',
      name: 'Swimming pool1',
      location: 'Location',
      city: 'City Name',
      online: 'One line',
      distance: '2km',
      status: 1,
      rate: 4,
      number: '1.2k Attendees',
      liked: false,
    },
    {
      image: Images.pooler3,
      date: '12th Oct',
      time: '10:00-12:00 PM',
      name: 'Swimming pool1',
      location: 'Location',
      city: 'City Name',
      online: 'One line',
      distance: '2km',
      status: 0,
      rate: 4,
      number: '1.2k Attendees',
      liked: true,
    },
    {
      image: Images.pooler1,
      date: '12th Oct',
      time: '10:00-12:00 PM',
      name: 'Swimming pool1',
      location: 'Location',
      city: 'City Name',
      online: 'One line',
      distance: '2km',
      status: 0,
      rate: 4,
      number: '1.2k Attendees',
      liked: false,
    }
  ],
  activity_outdoor_data: [
    {
      image: Images.boot,
      icon: Images.boot1,
      title: '7 events happening now.',
      type: 'Hiking experiences',
      location: 'City, and 3 other cities',
    },
    {
      image: Images.saxphone,
      icon: Images.saxphone1,
      title: '7 events happening now.',
      type: 'Fishing experiences',
      location: 'City, and 3 other cities',
    },
    {
      image: Images.bicycle,
      icon: Images.bicycle1,
      title: '14 events happening now.',
      type: 'Cycling experiences',
      location: 'City, and 3 other cities',
    },
  ],
  activity_book_data: [
    {
      status: 0,
      name: 'Library Name',
      location: 'Location',
      city: 'city name',
      online: 'one line',
      rate: 3,
      liked: false,
      books: [
        { image: Images.book1, },
        { image: Images.book2, },
        { image: Images.book3, },
        { image: Images.book4, },
        { image: Images.book5, },
        { image: Images.book6, },
        { image: Images.book7, },
      ]
    },
    {
      status: 1,
      name: 'Library Name',
      location: 'Location',
      city: 'city name',
      online: 'one line',
      rate: 3,
      liked: false,
      books: [
        { image: Images.book11, },
        { image: Images.book12, },
        { image: Images.book13, },
        { image: Images.book14, },
        { image: Images.book15, },
        { image: Images.book16, },
        { image: Images.book17, },
        { image: Images.book8, },
        { image: Images.book9, },
      ]
    },
    {
      status: 1,
      name: 'Library Name',
      location: 'Location',
      city: 'city name',
      online: 'one line',
      rate: 3,
      liked: false,
      books: [
        { image: Images.book10, },
        { image: Images.book19, },
        { image: Images.book13, },
        { image: Images.book16, },
        { image: Images.book17, },
        { image: Images.book8, },
        { image: Images.book9, },
      ]
    },
    {
      status: 0,
      name: 'Library Name',
      location: 'Location',
      city: 'city name',
      online: 'one line',
      rate: 3,
      liked: false,
      books: [
        { image: Images.book7, },
        { image: Images.book3, },
        { image: Images.book19, },
        { image: Images.book14, },
        { image: Images.book5, },
        { image: Images.book6, },
        { image: Images.book7, },
        { image: Images.book15, },
        { image: Images.book16, },
        { image: Images.book18, },
        { image: Images.book20, },
        { image: Images.book1, },
        { image: Images.book4, },
      ]
    },
  ],
  pool_detail_data: [
    { image: Images.slider_pool1 },
    { image: Images.slider_pool2 },
    { image: Images.slider_pool1 }
  ],
  library_detail_data: [
    { image: Images.slider_library },
    { image: Images.slider_library },
    { image: Images.slider_library },
  ],
  outdoor_detail_data: [
    {
      time: '10:00-12:00 PM',
      date: '12th Oct',
      location: 'Location',
      city: 'City Name',
      online: 'One line',
      name: 'Hiking Event Name',
      attendees: '1.2k',
      distance: '2km',
      bookstate: true,
    },
    {
      time: '10:00-12:00 PM',
      date: '12th Oct',
      location: 'Location',
      city: 'City Name',
      online: 'One line',
      name: 'Hiking Event Name',
      attendees: '1.2k',
      distance: '2km',
      bookstate: false,
    },
  ],
  home_data: [
    {
      id: 0,
      type: 1,
      icon: Images.sun,
      newly: false,
      title: 'High increased in temperature.',
      text: 'Lorem ipsum dolor sit amet,consectetur adipiscing edit, Eget egestons scelerisque st amet duls.'
    },
    {
      id: 1,
      type: 1,
      icon: Images.cloud,
      newly: false,
      title: 'Thunder storm closes several roads.',
      text: 'Lorem ipsum dolor sit amet,consectetur adipiscing edit, Eget egestons scelerisque st amet duls.'
    },
    {
      id: 2,
      type: 1,
      icon: Images.skunk,
      newly: false,
      title: 'Skunk migration close road IA and others',
      text: 'Lorem ipsum dolor sit amet,consectetur adipiscing edit, Eget egestons scelerisque st amet duls.'
    },
    {
      type: 0,
      icon: null,
      newly: true,
      title: 'A Notification title up to two lines',
      text: 'Lorem ipsum dolor sit amet,consectetur adipiscing edit, Eget egestons scelerisque st amet duls.'
    },
    {
      type: 0,
      icon: Images.notification1,
      newly: false,
      title: 'Notification title up to two lines',
      text: 'Lorem ipsum dolor sit amet,consectetur adipiscing edit, Eget egestons scelerisque st amet duls.'
    },
    {
      type: 0,
      icon: null,
      newly: true,
      title: 'S Notification title up to two lines',
      text: 'Lorem ipsum dolor sit amet,consectetur adipiscing edit, Eget egestons scelerisque st amet duls.'
    },
    {
      type: 0,
      icon: Images.notification2,
      newly: true,
      title: 'Notification title up to two lines',
      text: 'Lorem ipsum dolor sit amet,consectetur adipiscing edit, Eget egestons scelerisque st amet duls.'
    },
    {
      type: 0,
      icon: Images.notification3,
      newly: false,
      title: 'Notification title up to two lines',
      text: 'Lorem ipsum dolor sit amet,consectetur adipiscing edit, Eget egestons scelerisque st amet duls.'
    },
    {
      type: 0,
      icon: null,
      newly: false,
      title: 'C Notification title up to two lines',
      text: 'Lorem ipsum dolor sit amet,consectetur adipiscing edit, Eget egestons scelerisque st amet duls.'
    }
  ],
  add_error_report_data: {
    text: 'ERROR REPORTS IN Street 12, 123 45 City.',
  },
  error_reports_data: [
    {
      title: 'Error Reports title',
      creation_date: '1AM to 2:45 AM',
      text: 'Be if description up to two lines only. Might reach three lines.',
      location: ''
    },
    {
      title: 'Error Reports title',
      creation_date: '1AM to 2:45 AM',
      text: 'Be if description up to two lines only. Might reach three lines.',
      location: ''
    },
    {
      title: 'Error Reports title',
      creation_date: '1AM to 2:45 AM',
      text: 'Be if description up to two lines only. Might reach three lines.',
      location: ''
    },
  ],
  error_detail_datas: {
    title: 'Error Report Title',
    category: 'category name',
    date: '12th Oct 12:12PM',
    status: 'Active',
    description: '12th Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget egestas scelerisque ut amet duis sed.12th Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget egestas scelerisque ut amet duis sed.',
    images: [
      {
        image: Images.buttonBackground,
      },
      {
        image: Images.buttonBackground,
      },
      {
        image: Images.buttonBackground,
      },
    ],
    notes: [
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquamL',
        icon: Images.follower2,
      },
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquamL Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquamL Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquamL Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquamL ',
        icon: Images.follower3,
      },
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquamL',
        icon: Images.follower2,
      },
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquamL',
        icon: Images.follower2,
      },
    ],
  },
  category_data: [
    {
      value: 'category1',
      selected: false
    },
    {
      value: 'category1',
      selected: false
    },
    {
      value: 'category1',
      selected: false
    },
    {
      value: 'category1',
      selected: false
    },
    {
      value: 'category1',
      selected: false
    },
    {
      value: 'category1',
      selected: false
    },
    {
      value: 'category1',
      selected: false
    },
    {
      value: 'category1',
      selected: false
    },
    {
      value: 'category1',
      selected: false
    },
  ],
  tag_data: [
    {
      name: 'Brown',
      color: '#CCA480',
      selected: false,
      value:1
    },
    {
      name: 'Green',
      color: '#76AF7B',
      selected: false,
      value:2
    },
    {
      name: 'Lilac',
      color: '#8B8ED4',
      selected: false,
      value:3
    },
    {
      name: 'Yellow',
      color: '#C4C676',
      selected: false,
      value:4
    },
    {
      name: 'Pink',
      color: '#DD7DCE',
      selected: false,
      value:5
    },
    {
      name: 'Blue',
      color: '#97C6D0',
      selected: false,
      value:6
    }
  ],
  drafts_data: [
    {
      title: 'Title',
      text: 'Lorem ipsum dolor sit amet, das sds ssconsectetur adispiscing elit. Non dddd vulputate in nunc dolor at. Semper. dd',
      type: 0,
    },
    {
      title: 'Title',
      text: 'Lorem ipsum dolor sit amet, das sds ssconsectetur adispiscing elit. Non dddd vulputate in nunc dolor at. Semper. dd',
      type: 1,
    },
    {
      title: 'Title',
      text: 'Lorem ipsum dolor sit amet, das sds ssconsectetur adispiscing elit. Non dddd vulputate in nunc dolor at. Semper. dd',
      type: 2,
    },
    {
      title: 'Title',
      text: 'Lorem ipsum dolor sit amet, das sds ssconsectetur adispiscing elit. Non dddd vulputate in nunc dolor at. Semper. dd',
      type: 3,
    }
  ],
  add_event_result_data: {
    title: 'Event title one line then dots..',
    time: '1 AM to 2:45 AM',
    location: 'Location One line only',
    guestname: 'Names of guests, one line only',
  },
  guests: [
    {
      id: 0,
      name: 'Guest0',
      email: 'guest0@gmail.com',
      avatar: Images.guest0,
      selected: false,
    },
    {
      id: 1,
      name: 'Guest1',
      email: 'guest1@gmail.com',
      avatar: Images.guest1,
      selected: false,
    },
    {
      id: 2,
      name: 'Guest2',
      email: 'guest2@gmail.com',
      avatar: Images.guest2,
      selected: false,
    },
    {
      id: 3,
      name: 'Guest3',
      email: 'guest3@gmail.com',
      avatar: Images.guest3,
      selected: false,
    },
    {
      id: 4,
      name: 'Guest4',
      email: 'guest4@gmail.com',
      avatar: Images.guest4,
      selected: false,
    },
    {
      id: 5,
      name: 'Guest5',
      email: 'guest5@gmail.com',
      avatar: Images.guest5,
      selected: false,
    },
    {
      id: 6,
      name: 'Guest6',
      email: 'guest6@gmail.com',
      avatar: Images.guest6,
      selected: false,
    },
    {
      id: 7,
      name: 'Guest7',
      email: 'guest7@gmail.com',
      avatar: Images.guest7,
      selected: false,
    },
    {
      id: 8,
      name: 'Guest8',
      email: 'guest8@gmail.com',
      avatar: Images.guest8,
      selected: false,
    },
    {
      id: 9,
      name: 'Guest9',
      email: 'guest9@gmail.com',
      avatar: Images.guest9,
      selected: false,
    },
    {
      id: 10,
      name: 'Guest10',
      email: 'guest10@gmail.com',
      avatar: Images.guest10,
      selected: false,
    },
    {
      id: 11,
      name: 'Guest11',
      email: 'guest11@gmail.com',
      avatar: Images.guest11,
      selected: false,
    },
    {
      id: 12,
      name: 'Guest12',
      email: 'guest12@gmail.com',
      avatar: Images.guest12,
      selected: false,
    },
    {
      id: 13,
      name: 'Guest13',
      email: 'guest13@gmail.com',
      avatar: Images.guest13,
      selected: false,
    },
  ],
  guests_selected: [
    {
      id: 0,
      name: 'Guest0',
      email: 'guest0@gmail.com',
      avatar: Images.guest0,
      selected: true,
    },
    {
      id: 1,
      name: 'Guest1',
      email: 'guest1@gmail.com',
      avatar: Images.guest1,
      selected: true,
    },
    {
      id: 2,
      name: 'Guest2',
      email: 'guest2@gmail.com',
      avatar: Images.guest2,
      selected: true,
    },
  ],
  location_data: [
    {
      location: 'Location1: Street 12, 123 45 City.',
      selected: false,
    },
    {
      location: 'Location1: Street 12, 123 45 City.',
      selected: false,
    },
    {
      location: 'Location1: Street 12, 123 45 City.',
      selected: false,
    },
  ],
  invitation_name_sample: 'Invitation Name up to two lines',
  inviataion_datas: [
    {
      name: 'name1 of invite',
    },
    {
      name: 'name2',
    },
    {
      name: 'name of invite3'
    },
    {
      name: 'name4',
    },
    {
      name: 'name of invite5'
    },
  ],
  today_datas: {
    date: '14th Oct 2020',
    events: 3
  },
  bookings: [
    {
      time: '2021-01-09T07:00:00.000Z'
    },
    {
      time: '2021-01-10T07:00:00.000Z'
    }
  ],
  favorite_data: [
    {
      image: Images.near1,
      event_type: 0,
      date: '12th Oct',
      time: '10:00-12:00 PM',
      name: 'Jazz Night',
      location: 'Location',
      city: 'City Name',
      online: 'One line',
      distance: '2km',
      followers: [
        {
          icon: Images.follower1,
        },
        {
          icon: Images.follower2,
        },
        {
          icon: Images.follower3,
        }
      ],
      number: '1.2k Attendees',
      liked: true,
      description: 'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur'
    },
    {
      image: Images.near2,
      event_type: 0,
      date: '12th Oct',
      time: '10:00-12:00 PM',
      name: 'Jazz Night',
      location: 'Location',
      city: 'City Name',
      online: 'One line',
      distance: '2km',
      followers: [
        {
          icon: Images.follower1,
        },
        {
          icon: Images.follower2,
        },
        {
          icon: Images.follower3,
        }
      ],
      number: '1.2k Attendees',
      liked: true,
    },
    {
      image: Images.near3,
      event_type: 0,
      date: '12th Oct',
      time: '10:00-12:00 PM',
      name: 'Jazz Night',
      location: 'Location',
      city: 'City Name',
      online: 'One line',
      distance: '2km',
      followers: [
        {
          icon: Images.follower1,
        },
        {
          icon: Images.follower2,
        },
        {
          icon: Images.follower3,
        }
      ],
      number: '1.2k Attendees',
      liked: true,
    },
    {
      image: Images.near4,
      event_type: 1,
      date: '12th Oct',
      time: '10:00-12:00 PM',
      name: 'Jazz Night',
      location: 'Location',
      city: 'City Name',
      online: 'One line',
      distance: '2km',
      followers: [
        {
          icon: Images.follower1,
        },
        {
          icon: Images.follower2,
        },
        {
          icon: Images.follower3,
        }
      ],
      number: '1.2k Attendees',
      liked: true,
    },
    {
      image: Images.near1,
      event_type: 1,
      date: '12th Oct',
      time: '10:00-12:00 PM',
      name: 'Jazz Night',
      location: 'Location',
      city: 'City Name',
      online: 'One line',
      distance: '2km',
      followers: [
        {
          icon: Images.follower1,
        },
        {
          icon: Images.follower2,
        },
        {
          icon: Images.follower3,
        }
      ],
      number: '1.2k Attendees',
      liked: true,
      description: 'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur'
    },
    {
      image: Images.near1,
      event_type: 1,
      date: '12th Oct',
      time: '10:00-12:00 PM',
      name: 'Jazz Night',
      location: 'Location',
      city: 'City Name',
      online: 'One line',
      distance: '2km',
      followers: [
        {
          icon: Images.follower1,
        },
        {
          icon: Images.follower2,
        },
        {
          icon: Images.follower3,
        }
      ],
      number: '1.2k Attendees',
      liked: true,
      description: 'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur'
    },
    {
      image: Images.near4,
      event_type: 2,
      date: '12th Oct',
      time: '10:00-12:00 PM',
      name: 'Jazz Night',
      location: 'Location',
      city: 'City Name',
      online: 'One line',
      distance: '2km',
      followers: [
        {
          icon: Images.follower1,
        },
        {
          icon: Images.follower2,
        },
        {
          icon: Images.follower3,
        }
      ],
      number: '1.2k Attendees',
      liked: true,
    },
    {
      image: Images.near1,
      event_type: 2,
      date: '12th Oct',
      time: '10:00-12:00 PM',
      name: 'Jazz Night',
      location: 'Location',
      city: 'City Name',
      online: 'One line',
      distance: '2km',
      followers: [
        {
          icon: Images.follower1,
        },
        {
          icon: Images.follower2,
        },
        {
          icon: Images.follower3,
        }
      ],
      number: '1.2k Attendees',
      liked: true,
      description: 'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur'
    },
    {
      image: Images.near1,
      event_type: 2,
      date: '12th Oct',
      time: '10:00-12:00 PM',
      name: 'Jazz Night',
      location: 'Location',
      city: 'City Name',
      online: 'One line',
      distance: '2km',
      followers: [
        {
          icon: Images.follower1,
        },
        {
          icon: Images.follower2,
        },
        {
          icon: Images.follower3,
        }
      ],
      number: '1.2k Attendees',
      liked: true,
      description: 'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur'
    },
  ]
}

export default dummyData

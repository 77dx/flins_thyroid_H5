#coding:utf-8
from gloVal import gloVal


class mg_female_data():
        global mg_female_id
        mg_female_id = 0
        MG_FEMALE_DATA = {
            "id": mg_female_id,
            "qaQuestList": [
                {
                    "id": 21,
                    "qpId": 2,
                    "question": "您的性别？",
                    "subHead": "",
                    "code": "QL-000101",
                    "questType": 1,
                    "inputType": 3,
                    "sortNo": 1,
                    "createTime": 1540456151000,
                    "epId": 2,
                    "answer": "B",
                    "qaQuestOptionList": [
                        {
                            "id": 48,
                            "questId": 21,
                            "key": "A",
                            "desc": "男性",
                            "sortNo": 1,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        },
                        {
                            "id": 49,
                            "questId": 21,
                            "key": "B",
                            "desc": "女性",
                            "sortNo": 2,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        }
                    ],
                    "qaQuestRuleList": [],
                    "mammaryRuleList": [],
                    "createTimeDesc": "2018-10-25 16:29:11"
                },
                {
                    "id": 22,
                    "qpId": 2,
                    "question": "您的年龄？",
                    "subHead": "",
                    "code": "QL-000102",
                    "questType": 1,
                    "inputType": 3,
                    "sortNo": 2,
                    "createTime": 1540456151000,
                    "epId": 2,
                    "answer": "A",
                    "qaQuestOptionList": [
                        {
                            "id": 50,
                            "questId": 22,
                            "key": "A",
                            "desc": "＜30岁",
                            "sortNo": 1,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        },
                        {
                            "id": 51,
                            "questId": 22,
                            "key": "B",
                            "desc": "30-39岁",
                            "sortNo": 2,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        },
                        {
                            "id": 52,
                            "questId": 22,
                            "key": "C",
                            "desc": "40-49岁",
                            "sortNo": 3,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        },
                        {
                            "id": 53,
                            "questId": 22,
                            "key": "D",
                            "desc": "50-59岁",
                            "sortNo": 4,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        },
                        {
                            "id": 54,
                            "questId": 22,
                            "key": "E",
                            "desc": "≥60岁",
                            "sortNo": 5,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        }
                    ],
                    "qaQuestRuleList": [],
                    "mammaryRuleList": [],
                    "createTimeDesc": "2018-10-25 16:29:11"
                },
                {
                    "id": 23,
                    "qpId": 2,
                    "question": "您的文化程度？",
                    "subHead": "",
                    "code": "QL-000103",
                    "questType": 1,
                    "inputType": 3,
                    "sortNo": 3,
                    "createTime": 1540456151000,
                    "epId": 2,
                    "answer": "A",
                    "qaQuestOptionList": [
                        {
                            "id": 55,
                            "questId": 23,
                            "key": "A",
                            "desc": "初中及以下",
                            "sortNo": 1,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        },
                        {
                            "id": 56,
                            "questId": 23,
                            "key": "B",
                            "desc": "高中或中专",
                            "sortNo": 2,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        },
                        {
                            "id": 57,
                            "questId": 23,
                            "key": "C",
                            "desc": "大专、本科及以上",
                            "sortNo": 3,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        }
                    ],
                    "qaQuestRuleList": [],
                    "mammaryRuleList": [],
                    "createTimeDesc": "2018-10-25 16:29:11"
                },
                {
                    "id": 24,
                    "qpId": 2,
                    "question": "您现在的身高（厘米）？",
                    "subHead": "请输入您的身高",
                    "code": "QL-000104",
                    "questType": 3,
                    "inputType": 2,
                    "sortNo": 4,
                    "createTime": 1540456151000,
                    "epId": 2,
                    "answer": "170",
                    "qaQuestOptionList": [],
                    "qaQuestRuleList": [],
                    "mammaryRuleList": [],
                    "createTimeDesc": "2018-10-25 16:29:11"
                },
                {
                    "id": 25,
                    "qpId": 2,
                    "question": "您现在的体重（公斤）？",
                    "subHead": "请输入您的体重",
                    "code": "QL-000105",
                    "questType": 3,
                    "inputType": 2,
                    "sortNo": 5,
                    "createTime": 1540456151000,
                    "epId": 2,
                    "answer": "70",
                    "qaQuestOptionList": [],
                    "qaQuestRuleList": [],
                    "mammaryRuleList": [],
                    "createTimeDesc": "2018-10-25 16:29:11"
                },
                {
                    "id": 26,
                    "qpId": 2,
                    "question": "您有患过乳腺良性疾病吗？(如：乳腺增生)",
                    "subHead": "",
                    "code": "QL-000106",
                    "questType": 1,
                    "inputType": 3,
                    "sortNo": 6,
                    "createTime": 1540456151000,
                    "epId": 2,
                    "answer": "A",
                    "qaQuestOptionList": [
                        {
                            "id": 58,
                            "questId": 26,
                            "key": "A",
                            "desc": "有，未做手术",
                            "sortNo": 1,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        },
                        {
                            "id": 59,
                            "questId": 26,
                            "key": "B",
                            "desc": "有，已做手术，检查结果为良性",
                            "sortNo": 2,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        },
                        {
                            "id": 60,
                            "questId": 26,
                            "key": "C",
                            "desc": "没有或不清楚",
                            "sortNo": 3,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        }
                    ],
                    "qaQuestRuleList": [],
                    "mammaryRuleList": [],
                    "createTimeDesc": "2018-10-25 16:29:11"
                },
                {
                    "id": 27,
                    "qpId": 2,
                    "question": "您的亲属中有患乳腺良性疾病的吗？(如：乳腺增生)（可多选）",
                    "subHead": "",
                    "code": "QL-000107",
                    "questType": 2,
                    "inputType": 3,
                    "sortNo": 7,
                    "createTime": 1540456151000,
                    "epId": 2,
                    "answer": "C",
                    "qaQuestOptionList": [
                        {
                            "id": 61,
                            "questId": 27,
                            "key": "A",
                            "desc": "父母或子女或兄弟姐妹患有",
                            "sortNo": 1,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        },
                        {
                            "id": 62,
                            "questId": 27,
                            "key": "B",
                            "desc": "叔伯、姨姑舅、祖父母、外祖父母患有",
                            "sortNo": 2,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        },
                        {
                            "id": 63,
                            "questId": 27,
                            "key": "C",
                            "desc": "没有或不知道",
                            "sortNo": 3,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        }
                    ],
                    "qaQuestRuleList": [],
                    "mammaryRuleList": [
                        {
                            "id": 3,
                            "questId": 27,
                            "ruleType": 2,
                            "key": "",
                            "ruleContent": "{\"C\": \"A\",\"C\": \"B\"}",
                            "sortNo": 0,
                            "createTime": 1558509810000
                        }
                    ],
                    "createTimeDesc": "2018-10-25 16:29:11"
                },
                {
                    "id": 28,
                    "qpId": 2,
                    "question": "您的亲属中有得乳腺癌的吗？（可多选）",
                    "subHead": "",
                    "code": "QL-000108",
                    "questType": 2,
                    "inputType": 3,
                    "sortNo": 8,
                    "createTime": 1540456151000,
                    "epId": 2,
                    "answer": "C",
                    "qaQuestOptionList": [
                        {
                            "id": 64,
                            "questId": 28,
                            "key": "A",
                            "desc": "父母或子女或兄弟姐妹患有",
                            "sortNo": 1,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        },
                        {
                            "id": 65,
                            "questId": 28,
                            "key": "B",
                            "desc": "叔伯、姨姑舅、祖父母、外祖父母患有",
                            "sortNo": 2,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        },
                        {
                            "id": 66,
                            "questId": 28,
                            "key": "C",
                            "desc": "没有或不知道",
                            "sortNo": 3,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        }
                    ],
                    "qaQuestRuleList": [],
                    "mammaryRuleList": [
                        {
                            "id": 4,
                            "questId": 28,
                            "ruleType": 2,
                            "key": "",
                            "ruleContent": "{\"C\": \"A\",\"C\": \"B\"}",
                            "sortNo": 0,
                            "createTime": 1558510343000
                        }
                    ],
                    "createTimeDesc": "2018-10-25 16:29:11"
                },
                {
                    "id": 29,
                    "qpId": 2,
                    "question": "和您有血缘关系的亲属中有得过其他癌症的吗（除乳腺癌外）？",
                    "subHead": "",
                    "code": "QL-000109",
                    "questType": 1,
                    "inputType": 3,
                    "sortNo": 9,
                    "createTime": 1540456151000,
                    "epId": 2,
                    "answer": "B",
                    "qaQuestOptionList": [
                        {
                            "id": 67,
                            "questId": 29,
                            "key": "A",
                            "desc": "有",
                            "sortNo": 1,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        },
                        {
                            "id": 68,
                            "questId": 29,
                            "key": "B",
                            "desc": "没有或不知道",
                            "sortNo": 2,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        }
                    ],
                    "qaQuestRuleList": [],
                    "mammaryRuleList": [],
                    "createTimeDesc": "2018-10-25 16:29:11"
                },
                {
                    "id": 30,
                    "qpId": 2,
                    "question": "您首次月经是什么时候？",
                    "subHead": "",
                    "code": "QL-000110",
                    "questType": 1,
                    "inputType": 3,
                    "sortNo": 10,
                    "createTime": 1540456151000,
                    "epId": 2,
                    "answer": "A",
                    "qaQuestOptionList": [
                        {
                            "id": 69,
                            "questId": 30,
                            "key": "A",
                            "desc": "<14岁",
                            "sortNo": 1,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        },
                        {
                            "id": 70,
                            "questId": 30,
                            "key": "B",
                            "desc": "≥14岁",
                            "sortNo": 2,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        },
                        {
                            "id": 71,
                            "questId": 30,
                            "key": "C",
                            "desc": "本宝宝还没有来月经",
                            "sortNo": 3,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        }
                    ],
                    "qaQuestRuleList": [],
                    "mammaryRuleList": [
                        {
                            "id": 2,
                            "questId": 30,
                            "ruleType": 1,
                            "key": "C",
                            "ruleContent": "QL-000111,QL-000112,QL-000113,QL-000114",
                            "sortNo": 0,
                            "createTime": 1558509810000
                        }
                    ],
                    "createTimeDesc": "2018-10-25 16:29:11"
                },
                {
                    "id": 31,
                    "qpId": 2,
                    "question": "您的月经规律吗？（可多选）",
                    "subHead": "",
                    "code": "QL-000111",
                    "questType": 2,
                    "inputType": 3,
                    "sortNo": 11,
                    "createTime": 1540456151000,
                    "epId": 2,
                    "answer": "A",
                    "qaQuestOptionList": [
                        {
                            "id": 72,
                            "questId": 31,
                            "key": "A",
                            "desc": "月经周期延长或缩短（7天以上）",
                            "sortNo": 1,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        },
                        {
                            "id": 73,
                            "questId": 31,
                            "key": "B",
                            "desc": "经期持续时间延长（7天以上）",
                            "sortNo": 2,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        },
                        {
                            "id": 74,
                            "questId": 31,
                            "key": "C",
                            "desc": "经量有时候很多，有时候很少",
                            "sortNo": 3,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        },
                        {
                            "id": 75,
                            "questId": 31,
                            "key": "D",
                            "desc": "大多数情况规律，偶尔不规律",
                            "sortNo": 4,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        }
                    ],
                    "qaQuestRuleList": [],
                    "mammaryRuleList": [
                        {
                            "id": 5,
                            "questId": 31,
                            "ruleType": 2,
                            "key": "",
                            "ruleContent": "{\"D\": \"A\",\"D\": \"B\",\"D\": \"C\"}",
                            "sortNo": 0,
                            "createTime": 1558510343000
                        }
                    ],
                    "createTimeDesc": "2018-10-25 16:29:11"
                },
                {
                    "id": 32,
                    "qpId": 2,
                    "question": "您有过流产经历吗？",
                    "subHead": "",
                    "code": "QL-000112",
                    "questType": 1,
                    "inputType": 3,
                    "sortNo": 12,
                    "createTime": 1540456151000,
                    "epId": 2,
                    "answer": "A",
                    "qaQuestOptionList": [
                        {
                            "id": 76,
                            "questId": 32,
                            "key": "A",
                            "desc": "有过1~2次自然或人工流产经历",
                            "sortNo": 1,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        },
                        {
                            "id": 77,
                            "questId": 32,
                            "key": "B",
                            "desc": "有过3次及以上自然或人工流产经历",
                            "sortNo": 2,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        },
                        {
                            "id": 78,
                            "questId": 32,
                            "key": "C",
                            "desc": "额，这个问题问得太突然啦，人家还是个“宝宝”",
                            "sortNo": 3,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        }
                    ],
                    "qaQuestRuleList": [],
                    "mammaryRuleList": [],
                    "createTimeDesc": "2018-10-25 16:29:11"
                },
                {
                    "id": 33,
                    "qpId": 2,
                    "question": "您第一次生孩子是在什么时候呢？",
                    "subHead": "",
                    "code": "QL-000113",
                    "questType": 1,
                    "inputType": 3,
                    "sortNo": 13,
                    "createTime": 1540456151000,
                    "epId": 2,
                    "answer": "A",
                    "qaQuestOptionList": [
                        {
                            "id": 79,
                            "questId": 33,
                            "key": "A",
                            "desc": "30岁之前",
                            "sortNo": 1,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        },
                        {
                            "id": 80,
                            "questId": 33,
                            "key": "B",
                            "desc": "30岁及以上",
                            "sortNo": 2,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        },
                        {
                            "id": 81,
                            "questId": 33,
                            "key": "C",
                            "desc": "哼！人家还是小公举呢",
                            "sortNo": 3,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        }
                    ],
                    "qaQuestRuleList": [],
                    "mammaryRuleList": [],
                    "createTimeDesc": "2018-10-25 16:29:11"
                },
                {
                    "id": 34,
                    "qpId": 2,
                    "question": "您有吃过避孕药吗？",
                    "subHead": "",
                    "code": "QL-000114",
                    "questType": 1,
                    "inputType": 3,
                    "sortNo": 14,
                    "createTime": 1540456151000,
                    "epId": 2,
                    "answer": "A",
                    "qaQuestOptionList": [
                        {
                            "id": 82,
                            "questId": 34,
                            "key": "A",
                            "desc": "偶尔服用过一两次",
                            "sortNo": 1,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        },
                        {
                            "id": 83,
                            "questId": 34,
                            "key": "B",
                            "desc": "最近一个月或者目前正在服用",
                            "sortNo": 2,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        },
                        {
                            "id": 84,
                            "questId": 34,
                            "key": "C",
                            "desc": "服用避孕药1~5年（正在服用或已停用）",
                            "sortNo": 3,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        },
                        {
                            "id": 85,
                            "questId": 34,
                            "key": "D",
                            "desc": "服用避孕药5年以上（正在服用或已停用）",
                            "sortNo": 4,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        },
                        {
                            "id": 86,
                            "questId": 34,
                            "key": "E",
                            "desc": "从来没有",
                            "sortNo": 5,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        }
                    ],
                    "qaQuestRuleList": [],
                    "mammaryRuleList": [],
                    "createTimeDesc": "2018-10-25 16:29:11"
                },
                {
                    "id": 35,
                    "qpId": 2,
                    "question": "您的性格属于？",
                    "subHead": "",
                    "code": "QL-000115",
                    "questType": 1,
                    "inputType": 3,
                    "sortNo": 15,
                    "createTime": 1540456151000,
                    "epId": 2,
                    "answer": "A",
                    "qaQuestOptionList": [
                        {
                            "id": 87,
                            "questId": 35,
                            "key": "A",
                            "desc": "外向型，能够很快融入到新的圈子",
                            "sortNo": 1,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        },
                        {
                            "id": 88,
                            "questId": 35,
                            "key": "B",
                            "desc": "慢热型，相处久了你会发现不一样的我",
                            "sortNo": 2,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        },
                        {
                            "id": 89,
                            "questId": 35,
                            "key": "C",
                            "desc": "内向型，不善于交际",
                            "sortNo": 3,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        }
                    ],
                    "qaQuestRuleList": [],
                    "mammaryRuleList": [],
                    "createTimeDesc": "2018-10-25 16:29:11"
                },
                {
                    "id": 36,
                    "qpId": 2,
                    "question": "您的睡眠质量怎么样？（可多选）",
                    "subHead": "",
                    "code": "QL-000116",
                    "questType": 2,
                    "inputType": 3,
                    "sortNo": 16,
                    "createTime": 1540456151000,
                    "epId": 2,
                    "answer": "A",
                    "qaQuestOptionList": [
                        {
                            "id": 90,
                            "questId": 36,
                            "key": "A",
                            "desc": "难以入睡，一天睡眠时间低于5小时",
                            "sortNo": 1,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        },
                        {
                            "id": 91,
                            "questId": 36,
                            "key": "B",
                            "desc": "经常做梦，睡醒后很疲劳",
                            "sortNo": 2,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        },
                        {
                            "id": 92,
                            "questId": 36,
                            "key": "C",
                            "desc": "很容易醒，醒了之后很难再入睡",
                            "sortNo": 3,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        },
                        {
                            "id": 93,
                            "questId": 36,
                            "key": "D",
                            "desc": "我感觉我的睡眠质量还不错",
                            "sortNo": 4,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        }
                    ],
                    "qaQuestRuleList": [],
                    "mammaryRuleList": [
                        {
                            "id": 6,
                            "questId": 36,
                            "ruleType": 2,
                            "key": "",
                            "ruleContent": "{\"D\": \"A\",\"D\": \"B\",\"D\": \"C\"}",
                            "sortNo": 0,
                            "createTime": 1558510343000
                        }
                    ],
                    "createTimeDesc": "2018-10-25 16:29:11"
                },
                {
                    "id": 37,
                    "qpId": 2,
                    "question": "您有以下饮食习惯吗？（可多选）",
                    "subHead": "",
                    "code": "QL-000117",
                    "questType": 2,
                    "inputType": 3,
                    "sortNo": 17,
                    "createTime": 1540456151000,
                    "epId": 2,
                    "answer": "A",
                    "qaQuestOptionList": [
                        {
                            "id": 94,
                            "questId": 37,
                            "key": "A",
                            "desc": "经常（每周≥3次）吃披萨、汉堡、油炸、烧烤等食物",
                            "sortNo": 1,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        },
                        {
                            "id": 95,
                            "questId": 37,
                            "key": "B",
                            "desc": "基本每餐吃肉为主，不吃或少吃蔬菜",
                            "sortNo": 2,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        },
                        {
                            "id": 96,
                            "questId": 37,
                            "key": "C",
                            "desc": "经常（每周≥3次）吃巧克力、冰淇淋、糖果等甜食",
                            "sortNo": 3,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        },
                        {
                            "id": 97,
                            "questId": 37,
                            "key": "D",
                            "desc": "正常饮食，荤食搭配",
                            "sortNo": 4,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        }
                    ],
                    "qaQuestRuleList": [],
                    "mammaryRuleList": [
                        {
                            "id": 7,
                            "questId": 37,
                            "ruleType": 2,
                            "key": "",
                            "ruleContent": "{\"D\": \"A\",\"D\": \"B\",\"D\": \"C\"}",
                            "sortNo": 0,
                            "createTime": 1558510343000
                        }
                    ],
                    "createTimeDesc": "2018-10-25 16:29:11"
                },
                {
                    "id": 38,
                    "qpId": 2,
                    "question": "您有以下生活习惯吗？（可多选）",
                    "subHead": "",
                    "code": "QL-000118",
                    "questType": 2,
                    "inputType": 3,
                    "sortNo": 18,
                    "createTime": 1540456151000,
                    "epId": 2,
                    "answer": "A",
                    "qaQuestOptionList": [
                        {
                            "id": 98,
                            "questId": 38,
                            "key": "A",
                            "desc": "睡觉时不脱文胸",
                            "sortNo": 1,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        },
                        {
                            "id": 99,
                            "questId": 38,
                            "key": "B",
                            "desc": "长期穿坚硬的文胸",
                            "sortNo": 2,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        },
                        {
                            "id": 100,
                            "questId": 38,
                            "key": "C",
                            "desc": "戴比较紧的文胸或者文胸肩带比较紧",
                            "sortNo": 3,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        },
                        {
                            "id": 101,
                            "questId": 38,
                            "key": "D",
                            "desc": "以上都没有",
                            "sortNo": 4,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        }
                    ],
                    "qaQuestRuleList": [],
                    "mammaryRuleList": [
                        {
                            "id": 8,
                            "questId": 38,
                            "ruleType": 2,
                            "key": "",
                            "ruleContent": "{\"D\": \"A\",\"D\": \"B\",\"D\": \"C\"}",
                            "sortNo": 0,
                            "createTime": 1558510343000
                        }
                    ],
                    "createTimeDesc": "2018-10-25 16:29:11"
                },
                {
                    "id": 39,
                    "qpId": 2,
                    "question": "您吸烟吗？",
                    "subHead": "",
                    "code": "QL-000119",
                    "questType": 1,
                    "inputType": 3,
                    "sortNo": 19,
                    "createTime": 1540456151000,
                    "epId": 2,
                    "answer": "A",
                    "qaQuestOptionList": [
                        {
                            "id": 102,
                            "questId": 39,
                            "key": "A",
                            "desc": "我连续抽烟10年以上",
                            "sortNo": 1,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        },
                        {
                            "id": 103,
                            "questId": 39,
                            "key": "B",
                            "desc": "我连续抽烟10年及以下",
                            "sortNo": 2,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        },
                        {
                            "id": 104,
                            "questId": 39,
                            "key": "C",
                            "desc": "香烟有害健康，我不抽烟",
                            "sortNo": 3,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        }
                    ],
                    "qaQuestRuleList": [],
                    "mammaryRuleList": [],
                    "createTimeDesc": "2018-10-25 16:29:11"
                },
                {
                    "id": 40,
                    "qpId": 2,
                    "question": "您身边有人经常吸烟吗？",
                    "subHead": "",
                    "code": "QL-000120",
                    "questType": 1,
                    "inputType": 3,
                    "sortNo": 20,
                    "createTime": 1540456151000,
                    "epId": 2,
                    "answer": "A",
                    "qaQuestOptionList": [
                        {
                            "id": 105,
                            "questId": 40,
                            "key": "A",
                            "desc": "我连续吸二手烟10年以上",
                            "sortNo": 1,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        },
                        {
                            "id": 106,
                            "questId": 40,
                            "key": "B",
                            "desc": "我连续吸二手烟10年及以下",
                            "sortNo": 2,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        },
                        {
                            "id": 107,
                            "questId": 40,
                            "key": "C",
                            "desc": "我身边偶尔有或没有人吸烟",
                            "sortNo": 3,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        }
                    ],
                    "qaQuestRuleList": [],
                    "mammaryRuleList": [],
                    "createTimeDesc": "2018-10-25 16:29:11"
                },
                {
                    "id": 41,
                    "qpId": 2,
                    "question": "在平时生活和工作中，您是否觉得压力大？",
                    "subHead": "",
                    "code": "QL-000121",
                    "questType": 1,
                    "inputType": 3,
                    "sortNo": 21,
                    "createTime": 1540456151000,
                    "epId": 2,
                    "answer": "A",
                    "qaQuestOptionList": [
                        {
                            "id": 108,
                            "questId": 41,
                            "key": "A",
                            "desc": "经常觉得压力山大",
                            "sortNo": 1,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        },
                        {
                            "id": 109,
                            "questId": 41,
                            "key": "B",
                            "desc": "偶尔会觉得有压力",
                            "sortNo": 2,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        },
                        {
                            "id": 110,
                            "questId": 41,
                            "key": "C",
                            "desc": "没什么压力",
                            "sortNo": 3,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        }
                    ],
                    "qaQuestRuleList": [],
                    "mammaryRuleList": [],
                    "createTimeDesc": "2018-10-25 16:29:11"
                },
                {
                    "id": 42,
                    "qpId": 2,
                    "question": "工作中，您有长期接触以下物质吗？（可多选）",
                    "subHead": "",
                    "code": "QL-000122",
                    "questType": 2,
                    "inputType": 3,
                    "sortNo": 22,
                    "createTime": 1540456151000,
                    "epId": 2,
                    "answer": "A",
                    "qaQuestOptionList": [
                        {
                            "id": 111,
                            "questId": 42,
                            "key": "A",
                            "desc": "甲苯、甲醛、氯气、农药、橡胶等化学物质",
                            "sortNo": 1,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        },
                        {
                            "id": 112,
                            "questId": 42,
                            "key": "B",
                            "desc": "CT、X光等有放射性的设备",
                            "sortNo": 2,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        },
                        {
                            "id": 113,
                            "questId": 42,
                            "key": "C",
                            "desc": "以上都没有",
                            "sortNo": 3,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        }
                    ],
                    "qaQuestRuleList": [],
                    "mammaryRuleList": [
                        {
                            "id": 9,
                            "questId": 42,
                            "ruleType": 2,
                            "key": "",
                            "ruleContent": "{\"F\": \"A\",\"F\": \"B\",\"F\": \"C\",\"F\": \"D\",\"F\": \"E\"}",
                            "sortNo": 0,
                            "createTime": 1558510343000
                        }
                    ],
                    "createTimeDesc": "2018-10-25 16:29:11"
                },
                {
                    "id": 43,
                    "qpId": 2,
                    "question": "近一年内，您有遇到以下这些事情吗？（可多选）",
                    "subHead": "",
                    "code": "QL-000123",
                    "questType": 2,
                    "inputType": 3,
                    "sortNo": 23,
                    "createTime": 1540456151000,
                    "epId": 2,
                    "answer": "A",
                    "qaQuestOptionList": [
                        {
                            "id": 114,
                            "questId": 43,
                            "key": "A",
                            "desc": "家庭生活不和谐、经常吵架",
                            "sortNo": 1,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        },
                        {
                            "id": 115,
                            "questId": 43,
                            "key": "B",
                            "desc": "亲人去世",
                            "sortNo": 2,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        },
                        {
                            "id": 116,
                            "questId": 43,
                            "key": "C",
                            "desc": "失恋或离异",
                            "sortNo": 3,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        },
                        {
                            "id": 117,
                            "questId": 43,
                            "key": "D",
                            "desc": "创业失败或破产",
                            "sortNo": 4,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        },
                        {
                            "id": 118,
                            "questId": 43,
                            "key": "E",
                            "desc": "长期精神压抑",
                            "sortNo": 5,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        },
                        {
                            "id": 119,
                            "questId": 43,
                            "key": "F",
                            "desc": "以上都没有",
                            "sortNo": 6,
                            "createTime": 1540456216000,
                            "createTimeDesc": "2018-10-25 16:30:16"
                        }
                    ],
                    "qaQuestRuleList": [],
                    "mammaryRuleList": [
                        {
                            "id": 10,
                            "questId": 43,
                            "ruleType": 2,
                            "key": "",
                            "ruleContent": "{\"D\": \"A\",\"D\": \"B\",\"D\": \"C\"}",
                            "sortNo": 0,
                            "createTime": 1558510343000
                        }
                    ],
                    "createTimeDesc": "2018-10-25 16:29:11"
                }
            ]
        }


if __name__ == '__main__':
    print(mg_female_id)
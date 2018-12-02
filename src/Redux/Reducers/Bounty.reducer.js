import { bountyTypes } from "../../Redux/Actions/Bounty.actions";

const initialState = {
  bounties: [{
    "bountyId": 1,
    "description": "test bounty",
    "submitted": 1543344599788,
    "amount": 100,
    "votes": 10,
    "timer": 7000000,
    "statusId": 1,
    "correctAnswerId": null,
    "picture": "",
    "userId": 1,
    "subject": [
        {
            "subjectId": 2,
            "subject": "Programming"
        }
    ]
},
{
    "bountyId": 6,
    "description": "test bounties",
    "submitted": 1543212000000,
    "amount": 42,
    "votes": 0,
    "timer": 7000000,
    "statusId": 1,
    "correctAnswerId": null,
    "picture": "",
    "userId": 1,
    "subject": [
        {
            "subjectId": 2,
            "subject": "Programming"
        }
    ]
},
{
    "bountyId": 7,
    "description": "test bounties",
    "submitted": 1543125600000,
    "amount": 42,
    "votes": 0,
    "timer": 7000000,
    "statusId": 1,
    "correctAnswerId": null,
    "picture": "",
    "userId": 1,
    "subject": [
        {
            "subjectId": 2,
            "subject": "Programming"
        }
    ]
},
{
    "bountyId": 8,
    "description": "test bounties",
    "submitted": 1543039200000,
    "amount": 42,
    "votes": 0,
    "timer": 7000000,
    "statusId": 1,
    "correctAnswerId": null,
    "picture": "",
    "userId": 1,
    "subject": [
        {
            "subjectId": 2,
            "subject": "Programming"
        }
    ]
},
{
    "bountyId": 9,
    "description": "test bounties",
    "submitted": 1542952800000,
    "amount": 42,
    "votes": 0,
    "timer": 7000000,
    "statusId": 1,
    "correctAnswerId": null,
    "picture": "",
    "userId": 1,
    "subject": [
        {
            "subjectId": 2,
            "subject": "Programming"
        }
    ]
},
{
    "bountyId": 10,
    "description": "test bounties",
    "submitted": 1542866400000,
    "amount": 42,
    "votes": 0,
    "timer": 7000000,
    "statusId": 1,
    "correctAnswerId": null,
    "picture": "",
    "userId": 1,
    "subject": [
        {
            "subjectId": 2,
            "subject": "Programming"
        }
    ]
},
{
    "bountyId": 11,
    "description": "test bounties",
    "submitted": 1542780000000,
    "amount": 42,
    "votes": 0,
    "timer": 7000000,
    "statusId": 1,
    "correctAnswerId": null,
    "picture": "",
    "userId": 1,
    "subject": [
        {
            "subjectId": 1,
            "subject": "Math"
        }
    ]
},
{
    "bountyId": 12,
    "description": "test bounties",
    "submitted": 1542693600000,
    "amount": 42,
    "votes": 0,
    "timer": 7000000,
    "statusId": 1,
    "correctAnswerId": null,
    "picture": "",
    "userId": 1,
    "subject": [
        {
            "subjectId": 1,
            "subject": "Math"
        }
    ]
},
{
    "bountyId": 13,
    "description": "test bounties",
    "submitted": 1542607200000,
    "amount": 42,
    "votes": 0,
    "timer": 7000000,
    "statusId": 1,
    "correctAnswerId": null,
    "picture": "",
    "userId": 1,
    "subject": [
        {
            "subjectId": 1,
            "subject": "Math"
        }
    ]
},
{
    "bountyId": 14,
    "description": "test bounties",
    "submitted": 1542520800000,
    "amount": 42,
    "votes": 0,
    "timer": 7000000,
    "statusId": 1,
    "correctAnswerId": null,
    "picture": "",
    "userId": 1,
    "subject": [
        {
            "subjectId": 1,
            "subject": "Math"
        }
    ]
},
{
    "bountyId": 15,
    "description": "test bounties",
    "submitted": 1542434400000,
    "amount": 42,
    "votes": 0,
    "timer": 7000000,
    "statusId": 1,
    "correctAnswerId": null,
    "picture": "",
    "userId": 1,
    "subject": [
        {
            "subjectId": 1,
            "subject": "Math"
        }
    ]
},
{
    "bountyId": 16,
    "description": "testing wallet subtraction",
    "submitted": 1543555656496,
    "amount": 100,
    "votes": 0,
    "timer": 7000000,
    "statusId": 1,
    "correctAnswerId": null,
    "picture": "",
    "userId": 2,
    "subject": [
        {
            "subjectId": 1,
            "subject": "Math"
        }
    ]
},
{
    "bountyId": 17,
    "description": "testing wallet subtraction",
    "submitted": 1543556052371,
    "amount": 100,
    "votes": 0,
    "timer": 7000000,
    "statusId": 1,
    "correctAnswerId": null,
    "picture": "",
    "userId": 2,
    "subject": [
        {
            "subjectId": 1,
            "subject": "Math"
        }
    ]
},
{
    "bountyId": 18,
    "description": "testing wallet subtraction",
    "submitted": 1543556435650,
    "amount": 100,
    "votes": 0,
    "timer": 7000000,
    "statusId": 1,
    "correctAnswerId": null,
    "picture": "",
    "userId": 2,
    "subject": [
        {
            "subjectId": 1,
            "subject": "Math"
        }
    ]
},
{
    "bountyId": 19,
    "description": "testing wallet subtraction",
    "submitted": 1543556763573,
    "amount": 100,
    "votes": 0,
    "timer": 7000000,
    "statusId": 1,
    "correctAnswerId": null,
    "picture": "",
    "userId": 2,
    "subject": [
        {
            "subjectId": 1,
            "subject": "Math"
        }
    ]
},
{
    "bountyId": 20,
    "description": "testing wallet subtraction",
    "submitted": 1543557089529,
    "amount": 100,
    "votes": 0,
    "timer": 7000000,
    "statusId": 1,
    "correctAnswerId": null,
    "picture": "",
    "userId": 2,
    "subject": [
        {
            "subjectId": 1,
            "subject": "Math"
        }
    ]
},
{
    "bountyId": 21,
    "description": "testing wallet subtraction",
    "submitted": 1543557196656,
    "amount": 100,
    "votes": 0,
    "timer": 7000000,
    "statusId": 1,
    "correctAnswerId": null,
    "picture": "",
    "userId": 2,
    "subject": [
        {
            "subjectId": 1,
            "subject": "Math"
        }
    ]
}
],
  modalOpen: false,
  modalBountyId: null,
  modalBounty: null
}
export const bountyReducer = (state = initialState, action) => {
  switch (action.type) {
    case bountyTypes.PREVIEW_BOUNTY:
      return {
        ...state,
        bounties: action.payload.bounties
    }
    case bountyTypes.OPEN_BOUNTY_MODAL:
      return {
        ...state,
        modalOpen:      action.payload.modalOpen,
        modalBountyId:  action.payload.modalBountyId,
        modalBounty:    action.payload.modalBounty
    }
    case bountyTypes.CLOSE_BOUNTY_MODAL:
      return {
        ...state,
        modalOpen:      action.payload.modalOpen,
        modalBountyId:  null,
        modalBounty:    null
    }
    default:
      break;
  }

  return state;
}

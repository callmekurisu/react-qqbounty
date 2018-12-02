import { bountyTypes } from "../../Redux/Actions/Bounty.actions";

const initialState = {
	newBounties:  {"bounty_list": {
		"content": [
			{
				"bountyId": 6,
				"description": "bounty 4",
				"submitted": 1543718688290,
				"amount": 100,
				"votes": 2,
				"expiration": 1543718688290,
				"statusId": 3,
				"correctAnswerId": null,
				"picture": "",
				"userId": 3,
				"username": "username2",
				"subject": []
		},
		{
				"bountyId": 5,
				"description": "bounty 4",
				"submitted": 1543717549970,
				"amount": 100,
				"votes": 2,
				"expiration": 1543717549970,
				"statusId": 2,
				"correctAnswerId": null,
				"picture": "",
				"userId": 3,
				"username": "username2",
				"subject": []
		},
		{
				"bountyId": 4,
				"description": "bounty 4",
				"submitted": 1543717457216,
				"amount": 100,
				"votes": 2,
				"expiration": 1543717457216,
				"statusId": 1,
				"correctAnswerId": null,
				"picture": "",
				"userId": 3,
				"username": "username2",
				"subject": []
		},
,
		{
				"bountyId": 1,
				"description": "This is my first bounty ever!!!!!!!!!!!!!",
				"submitted": 1543695239575,
				"amount": 50,
				"votes": 0,
				"expiration": 1543698839575,
				"statusId": 1,
				"correctAnswerId": null,
				"picture": "Hi",
				"userId": 4,
				"username": "username3",
				"subject": [
						{
								"subjectId": 1,
								"subject": "Math"
						}
				]
		}
		],
		"pageable": {
				"sort": {
						"sorted": false,
						"unsorted": true,
						"empty": true
				},
				"offset": 0,
				"pageNumber": 0,
				"pageSize": 20,
				"paged": true,
				"unpaged": false
		},
		"last": true,
		"totalPages": 1,
		"totalElements": 6,
		"size": 20,
		"number": 0,
		"sort": {
				"sorted": false,
				"unsorted": true,
				"empty": true
		},
		"numberOfElements": 6,
		"first": true,
		"empty": false
}},
	oldBounties: {"bounty_list": {
		"content": [
			{
				"bountyId": 6,
				"description": "bounty 4",
				"submitted": 1543718688290,
				"amount": 100,
				"votes": 2,
				"expiration": 1543718688290,
				"statusId": 3,
				"correctAnswerId": null,
				"picture": "",
				"userId": 3,
				"username": "username2",
				"subject": []
		},
		{
				"bountyId": 5,
				"description": "bounty 4",
				"submitted": 1543717549970,
				"amount": 100,
				"votes": 2,
				"expiration": 1543717549970,
				"statusId": 2,
				"correctAnswerId": null,
				"picture": "",
				"userId": 3,
				"username": "username2",
				"subject": []
		},
		{
				"bountyId": 4,
				"description": "bounty 4",
				"submitted": 1543717457216,
				"amount": 100,
				"votes": 2,
				"expiration": 1543717457216,
				"statusId": 1,
				"correctAnswerId": null,
				"picture": "",
				"userId": 3,
				"username": "username2",
				"subject": []
		},
,
		{
				"bountyId": 1,
				"description": "This is my first bounty ever!!!!!!!!!!!!!",
				"submitted": 1543695239575,
				"amount": 50,
				"votes": 0,
				"expiration": 1543698839575,
				"statusId": 1,
				"correctAnswerId": null,
				"picture": "Hi",
				"userId": 4,
				"username": "username3",
				"subject": [
						{
								"subjectId": 1,
								"subject": "Math"
						}
				]
		}
		],
		"pageable": {
				"sort": {
						"sorted": false,
						"unsorted": true,
						"empty": true
				},
				"offset": 0,
				"pageNumber": 0,
				"pageSize": 20,
				"paged": true,
				"unpaged": false
		},
		"last": true,
		"totalPages": 1,
		"totalElements": 6,
		"size": 20,
		"number": 0,
		"sort": {
				"sorted": false,
				"unsorted": true,
				"empty": true
		},
		"numberOfElements": 6,
		"first": true,
		"empty": false
}},
	popularBounties:  {"bounty_list": {
		"content": [
			{
				"bountyId": 1,
				"description": "bounty 1",
				"submitted": 1543718688290,
				"amount": 100,
				"votes": 2,
				"expiration": 1543718688290,
				"statusId": 3,
				"correctAnswerId": null,
				"picture": "",
				"userId": 3,
				"username": "username2",
				"subject": []
		},
		{
				"bountyId": 2,
				"description": "bounty 2",
				"submitted": 1543717549970,
				"amount": 100,
				"votes": 2,
				"expiration": 1543717549970,
				"statusId": 2,
				"correctAnswerId": null,
				"picture": "",
				"userId": 3,
				"username": "username2",
				"subject": []
		},
		{
				"bountyId": 3,
				"description": "bounty 3",
				"submitted": 1543717457216,
				"amount": 100,
				"votes": 2,
				"expiration": 1543717457216,
				"statusId": 1,
				"correctAnswerId": null,
				"picture": "",
				"userId": 3,
				"username": "username2",
				"subject": []
		},
		{
				"bountyId": 4,
				"description": "This is my first bounty ever!!!!!!!!!!!!!",
				"submitted": 1543695239575,
				"amount": 50,
				"votes": 0,
				"expiration": 1543698839575,
				"statusId": 1,
				"correctAnswerId": null,
				"picture": "Hi",
				"userId": 4,
				"username": "username3",
				"subject": [
						{
								"subjectId": 1,
								"subject": "Math"
						}
				]
		}
		],
		"pageable": {
				"sort": {
						"sorted": false,
						"unsorted": true,
						"empty": true
				},
				"offset": 0,
				"pageNumber": 0,
				"pageSize": 20,
				"paged": true,
				"unpaged": false
		},
		"last": true,
		"totalPages": 1,
		"totalElements": 6,
		"size": 20,
		"number": 0,
		"sort": {
				"sorted": false,
				"unsorted": true,
				"empty": true
		},
		"numberOfElements": 6,
		"first": true,
		"empty": false
}},
	highPayBounties: {"bounty_list": {
		"content": []
	}},
	searchBounties: {"bounty_list": {
		"content": []
	}},
  modalOpen: false,
  modalBountyId: null,
  modalBounty: null
}

export const bountyReducer = (state = initialState, action) => {
  switch (action.type) {
		case bountyTypes.GET_NEW_BOUNTIES:
      return {
        ...state,
        highPayBounties: action.payload.newBounties
		}
		case bountyTypes.GET_OLD_BOUNTIES:
      return {
        ...state,
        highPayBounties: action.payload.oldBounties
		}
		case bountyTypes.GET_POPULAR_BOUNTIES:
      return {
        ...state,
        popularBounties: action.payload.popularBounties
		}
    case bountyTypes.GET_HIGH_PAY_BOUNTIES:
      return {
        ...state,
        highPayBounties: action.payload.highPayBounties
		}
		case bountyTypes.GET_POPULAR_BOUNTIES:
      return {
        ...state,
        popularBounties: action.payload.popularBounties
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
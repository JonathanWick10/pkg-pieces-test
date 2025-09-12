import { createAction } from 'automation-pieces-framework-test';
import { slackAuth } from '../..';
import { assertNotNullOrUndefined } from 'automation-shared-test';
import {
  profilePicture,
  text,
  userId,
  username,
  actions,
} from '../common/props';
import { requestAction } from '../common/request-action';

export const requestActionDirectMessageAction = createAction({
  auth: slackAuth,
  name: 'request_action_direct_message',
  displayName: 'Request Action from A User',
  description:
    'Send a message to a user and wait until the user selects an action',
  props: {
    userId,
    text,
    actions,
    username,
    profilePicture,
  },
  async run(context) {
    const { userId } = context.propsValue;
    assertNotNullOrUndefined(userId, 'userId');

    return await requestAction(userId, context);
  },
});

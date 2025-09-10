import { createAction} from 'automation-pieces-framework-test';

export const stopFlow = createAction({
  name: 'stopFlow',
  displayName: 'Stop Flow',
  description: 'Stops the flow immediately this step is reached.',
  props: {},
  async run(context) {
    context.run.stop();

    return {
      success: true,
      message: 'Flow stopped successfully.',
    };
  },
});

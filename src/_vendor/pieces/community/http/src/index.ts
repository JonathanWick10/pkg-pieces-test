import { PieceAuth, createPiece } from 'automation-pieces-framework-test';
import { PieceCategory } from 'automation-shared-test';
import { httpSendRequestAction } from './lib/actions/send-http-request-action';

export const http = createPiece({
  displayName: 'HTTP',
  description: 'Sends HTTP requests and return responses',
  logoUrl: 'https://cdn.activepieces.com/pieces/http.png',
  categories: [PieceCategory.CORE],
  auth: PieceAuth.None(),
  minimumSupportedRelease: '0.20.3',
  actions: [httpSendRequestAction],
  authors: [
    'bibhuty-did-this',
    'landonmoir',
    'JanHolger',
    'Salem-Alaa',
    'kishanprmr',
    'AbdulTheActivePiecer',
    'khaledmashaly',
    'abuaboud',
    'pfernandez98',
  ],
  triggers: [],
});

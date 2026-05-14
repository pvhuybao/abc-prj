import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';

@WebSocketGateway()
export class AppGateway {
  private logger: Logger = new Logger('WebSocketGateway');

  @SubscribeMessage('message')
  handleMessage(@MessageBody() data: any): void {
    this.logger.log(`Received data from client: ${JSON.stringify(data)}`);
    // Bạn có thể xử lý dữ liệu ở đây, ví dụ gửi lại cho client hoặc lưu vào database
  }
}

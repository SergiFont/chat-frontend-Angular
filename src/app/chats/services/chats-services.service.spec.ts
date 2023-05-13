import { TestBed } from '@angular/core/testing';

import { ChatsServicesService } from './chats.service';

describe('ChatsServicesService', () => {
  let service: ChatsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

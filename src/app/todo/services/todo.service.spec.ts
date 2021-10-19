import { TestBed, waitForAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import { RestService } from './../../shared/rest/rest.service';
import { RestServiceMock } from './../../shared/rest/rest.service-mock';
import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;
  let restService: RestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: RestService, useClass: RestServiceMock }],
    });
    service = TestBed.inject(TodoService);
    restService = TestBed.inject(RestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getAllTodos', () => {
    it(
      'should be called with correct url',
      waitForAsync(() => {
        const spy = spyOn(restService, 'get').and.returnValue(of(null));

        service.getAllTodos().subscribe(() => {
          expect(spy).toHaveBeenCalledOnceWith(
            'https://sampletodobackend.azurewebsites.net/api/v1/todos/'
          );
        });
      })
    );
  });
});

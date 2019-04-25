import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCampaignModalComponent } from './add-campaign-modal.component';

describe('AddCampaignModalComponent', () => {
  let component: AddCampaignModalComponent;
  let fixture: ComponentFixture<AddCampaignModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCampaignModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCampaignModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { NoFoundComponent } from './pages/no-found/no-found.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
registerLocaleData(zh);
//页面
import { KnowledgePoint1Component } from './pages/knowledge-point1/knowledge-point1.component';
import { KnowledgePoint2Component } from './pages/knowledge-point2/knowledge-point2.component';
import { KnowledgePoint3Component } from './pages/knowledge-point3/knowledge-point3.component';
import { KnowledgePoint4Component } from './pages/knowledge-point4/knowledge-point4.component';
import { KnowledgePoint5Component } from './pages/knowledge-point5/knowledge-point5.component';
import { KnowledgePoint6Component } from './pages/knowledge-point6/knowledge-point6.component';
import { KnowledgePoint7Component } from './pages/knowledge-point7/knowledge-point7.component';
import { KnowledgePoint8Component } from './pages/knowledge-point8/knowledge-point8.component';
import { KnowledgePoint9Component } from './pages/knowledge-point9/knowledge-point9.component';
import { LifecycleComponent } from './pages/lifecycle/lifecycle.component';
import { KnowledgePoint10Component } from './pages/knowledge-point10/knowledge-point10.component';
import { NgOnchangesLifecycleComponent } from './components/ng-onchanges-lifecycle/ng-onchanges-lifecycle.component';

// ng-zorro 组件
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IndexOpenComponent } from './components/index-open/index-open.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';

// 服务

// 插件

// 管道
import { SortPipePipe } from './pipe/sort-pipe.pipe';
import { QuChongPipe } from './pipe/qu-chong.pipe';

// 双向数据绑定
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



// 自定义指令
import { DirectiveOneDirective } from './directive/directive-one.directive';
import { MyDirectiveDirective } from './directive/my-directive.directive';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NoFoundComponent,
    IndexOpenComponent,
    KnowledgePoint1Component,
    KnowledgePoint2Component,
    KnowledgePoint3Component,
    KnowledgePoint4Component,
    KnowledgePoint5Component,
    KnowledgePoint6Component,
    KnowledgePoint9Component,
    KnowledgePoint7Component,
    KnowledgePoint8Component,
    // 管道
    SortPipePipe,
    QuChongPipe,
    // 自定义指令
    DirectiveOneDirective,
    MyDirectiveDirective,
    LifecycleComponent,
    NgOnchangesLifecycleComponent,
    KnowledgePoint10Component,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,

    // ng-zorro 组件
    NzLayoutModule,
    NzIconModule,
    NzButtonModule,
    NzInputModule,
    NzDividerModule,
    NzAlertModule,
    NzCardModule,
    NzFormModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent],
})
export class AppModule {}
